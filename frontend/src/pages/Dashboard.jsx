import Navbar from "../components/layout/Navbar";
import CodeEditor from "../components/editor/CodeEditor";
import ResultPanel from "../components/result/ResultPanel";
import HintPanel from "../components/hint/HintPanel";
import QuestionNavigator from "../components/exam/QuestionNavigator";
import AutoSaveIndicator from "../components/exam/AutoSaveIndicator"; 

export default function Dashboard() {
  return (
    <div className="min-h-screen text-white relative z-10">
      <Navbar />

      <div className="pt-28 px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold">Coding Workspace</h1>

            <p className="text-gray-400 mt-2">
              Write code, submit solutions and get AI-powered feedback.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Sidebar */}
            <div className="col-span-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 h-[760px]">
                <h2 className="text-xl font-bold mb-8">Workspace</h2>

                <div className="space-y-4">
                  <button className="w-full rounded-xl bg-cyan-500 text-black py-3 font-semibold">
                    Dashboard
                  </button>

                  <button className="w-full rounded-xl border border-white/10 py-3 hover:bg-white/10 transition">
                    Problems
                  </button>

                  <button className="w-full rounded-xl border border-white/10 py-3 hover:bg-white/10 transition">
                    AI Mentor
                  </button>

                  <button className="w-full rounded-xl border border-white/10 py-3 hover:bg-white/10 transition">
                    History
                  </button>

                  <button className="w-full rounded-xl border border-white/10 py-3 hover:bg-white/10 transition">
                    Settings
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-span-10">
              {/* Challenge Card */}
              <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-8">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                        🔥 Daily Challenge
                      </span>

                      <h2 className="text-3xl font-bold mt-4">Two Sum</h2>
                    </div>

                    <div className="flex gap-3">
                      <span className="px-4 py-2 rounded-xl bg-green-500/20 text-green-300">
                        Easy
                      </span>

                      <span className="px-4 py-2 rounded-xl bg-violet-500/20 text-violet-300">
                        Arrays
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mt-6 leading-8 text-lg">
                    Given an array of integers{" "}
                    <span className="text-cyan-300 font-semibold">nums</span>{" "}
                    and an integer{" "}
                    <span className="text-violet-300 font-semibold">
                      target
                    </span>
                    , return the indices of the two numbers such that they add
                    up to the target.
                  </p>

                  <div className="flex gap-6 mt-8">
                    <div className="rounded-xl bg-white/5 px-5 py-3 border border-white/10">
                      <p className="text-gray-400 text-sm">Acceptance</p>
                      <h3 className="text-cyan-400 text-xl font-bold">
                        56.8%
                      </h3>
                    </div>

                    <div className="rounded-xl bg-white/5 px-5 py-3 border border-white/10">
                      <p className="text-gray-400 text-sm">Submissions</p>
                      <h3 className="text-violet-400 text-xl font-bold">
                        12.4M
                      </h3>
                    </div>

                    <div className="rounded-xl bg-white/5 px-5 py-3 border border-white/10">
                      <p className="text-gray-400 text-sm">Points</p>
                      <h3 className="text-yellow-400 text-xl font-bold">
                        +100
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workspace */}
              <div className="grid grid-cols-12 gap-6 mt-6">
                {/* Code Editor */}
                <div className="col-span-8">
                  <div className="rounded-3xl border border-white/10 bg-white/5 min-h-[620px] p-6">
                    <h2 className="text-2xl font-bold mb-4">
                      Code Editor
                    </h2>

                    <CodeEditor />
                  </div>
                </div>

                {/* Result Panel */}
                <div className="col-span-4">
                  <ResultPanel />
                </div>
              </div>

              {/* AI Hint Panel */}
              <div className="mt-6">
                <HintPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}