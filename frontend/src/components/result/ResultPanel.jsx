import {
  FiCheckCircle,
  FiClock,
  FiDatabase,
  FiAward,
  FiCode,
} from "react-icons/fi";
import { useEditor } from "../../context/EditorContext"; 

export default function ResultPanel() {
    const { result, loading } = useEditor();
  return (
    <div className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

      <h2 className="text-3xl font-bold mb-6">
        Result
      </h2>

      <div className="space-y-5">

        {/* Status */}

        <div className="rounded-2xl bg-green-500/10 border border-green-500/30 p-4">

          <div className="flex items-center gap-3">

            <FiCheckCircle
              size={26}
              className="text-green-400"
            />

            <div>

              <p className="text-green-400 font-semibold">
                {loading ? "Running..." : result.status}
              </p>

              <p className="text-sm text-gray-400">
                {loading
                    ? "Executing your code..."
                    : "All test cases passed"}
              </p>

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="space-y-4">

          <div className="flex justify-between">

            <div className="flex gap-2 items-center">

              <FiClock />

              <span>Execution</span>

            </div>

            <span className="text-cyan-400">
              {loading ? "--" : result.execution}
            </span>

          </div>

          <div className="flex justify-between">

            <div className="flex gap-2 items-center">

              <FiDatabase />

              <span>Memory</span>

            </div>

            <span className="text-cyan-400">
              {loading ? "--" : result.memory}
            </span>

          </div>

          <div className="flex justify-between">

            <div className="flex gap-2 items-center">

              <FiAward />

              <span>Score</span>

            </div>

            <span className="text-cyan-400">
              {loading ? "--" : `${result.score} Points`}
            </span>

          </div>

          <div className="flex justify-between">

            <div className="flex gap-2 items-center">

              <FiCode />

              <span>Language</span>

            </div>

            <span className="text-cyan-400">
              {result.language}
            </span>

          </div>

        </div>

        {/* Progress */}

        <div className="mt-8">

          <div className="flex justify-between text-sm mb-2">

            <span>Test Cases</span>

            <span>15 / 15</span>

          </div>

          <div className="h-3 rounded-full bg-gray-700 overflow-hidden">

            <div
              className={`h-full rounded-full transition-all duration-700 ${
                loading ? "w-1/3" : "w-full"
              } bg-gradient-to-r from-cyan-400 to-violet-500`}
            ></div>

          </div>

        </div>

      </div>

    </div>
  );
}