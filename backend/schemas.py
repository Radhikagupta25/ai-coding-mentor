from pydantic import BaseModel, Field


class SubmissionRequest(BaseModel):
    language: str = Field(..., min_length=1, description="Piston language name or alias")
    version: str = Field(
        default="*",
        description='SemVer selector for the runtime; use "*" to auto-select the latest',
    )
    code: str = Field(..., min_length=1, description="Source code to execute")
    expected_output: str | None = Field(
        default=None,
        description="Optional expected stdout for output validation",
    )


class SubmissionResponse(BaseModel):
    stdout: str
    stderr: str
    execution_time_ms: int = Field(
        description="Total wall-clock execution time (compile + run) in milliseconds",
    )
    compile_time_ms: int = Field(
        default=0,
        description="Compile stage wall-clock time in milliseconds",
    )
    run_time_ms: int = Field(
        default=0,
        description="Run stage wall-clock time in milliseconds",
    )
    exit_code: int | None = None
    language: str | None = None
    version: str | None = None
    output_matches: bool | None = Field(
        default=None,
        description="Present when expected_output was provided; True if stdout matches",
    )
