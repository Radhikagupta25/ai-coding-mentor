from contextlib import asynccontextmanager

import httpx
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware

from piston import PISTON_REQUEST_TIMEOUT, execute_on_piston
from schemas import SubmissionRequest, SubmissionResponse


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.http_client = httpx.AsyncClient(timeout=PISTON_REQUEST_TIMEOUT)
    yield
    await app.state.http_client.aclose()


app = FastAPI(
    title="AI Coding Mentor API",
    description="Backend for the AI coding mentor hackathon project",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health_check() -> dict[str, str]:
    return {"status": "ok", "message": "Backend is running"}


def _normalize_output(text: str) -> str:
    return text.rstrip("\n\r\t ")


@app.post("/api/submit", response_model=SubmissionResponse)
async def submit_code(
    submission: SubmissionRequest,
    request: Request,
) -> SubmissionResponse:
    client: httpx.AsyncClient = request.app.state.http_client

    try:
        result = await execute_on_piston(
            client=client,
            language=submission.language,
            version=submission.version,
            code=submission.code,
        )
    except httpx.ConnectError as exc:
        raise HTTPException(
            status_code=503,
            detail="Unable to reach the Piston code execution engine at http://localhost:2000",
        ) from exc
    except httpx.TimeoutException as exc:
        raise HTTPException(
            status_code=504,
            detail="Piston code execution timed out",
        ) from exc
    except httpx.HTTPStatusError as exc:
        raise HTTPException(
            status_code=502,
            detail=str(exc),
        ) from exc

    output_matches: bool | None = None
    if submission.expected_output is not None:
        output_matches = _normalize_output(result["stdout"]) == _normalize_output(
            submission.expected_output
        )

    return SubmissionResponse(
        stdout=result["stdout"],
        stderr=result["stderr"],
        execution_time_ms=result["execution_time_ms"],
        compile_time_ms=result["compile_time_ms"],
        run_time_ms=result["run_time_ms"],
        exit_code=result["exit_code"],
        language=result["language"],
        version=result["version"],
        output_matches=output_matches,
    )
