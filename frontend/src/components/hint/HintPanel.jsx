import {
  FiCpu,
  FiZap,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";
import { useEditor } from "../../context/EditorContext";

export default function HintPanel() {
  const { aiResponse, aiLoading } = useEditor();

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center">
          <FiCpu size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">AI Mentor</h2>

          <p className="text-gray-400 text-sm">
            Personalized feedback
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Analysis Status */}
        <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
          <div className="flex gap-3 items-center text-green-400">
            <FiCheckCircle />

            <span>
              {aiLoading
                ? "Checking solution..."
                : "Solution analyzed successfully."}
            </span>
          </div>
        </div>

        {/* Time Complexity */}
        <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
          <div className="flex gap-3 items-center text-cyan-400">
            <FiZap />

            <span>Time Complexity : O(n)</span>
          </div>
        </div>

        {/* AI Complexity */}
        <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
          <div className="flex gap-3 items-center text-violet-400">
            <FiTrendingUp />

            <span>
              {aiLoading
                ? "Calculating Time Complexity..."
                : aiResponse.complexity}
            </span>
          </div>
        </div>

        {/* AI Suggestion */}
        <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/30 p-5">
          <h3 className="text-cyan-400 font-semibold mb-3">
            💡 AI Suggestion
          </h3>

          <p className="text-gray-300 leading-7">
            {aiLoading
              ? "🤖 AI is analyzing your solution..."
              : aiResponse.logic}
          </p>

          {/* Optimization */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5 mt-5">
            <h3 className="text-violet-400 font-semibold mb-3">
              🚀 Optimization
            </h3>

            <p className="text-gray-300 leading-7">
              {aiLoading
                ? "Finding improvements..."
                : aiResponse.optimization}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button className="flex-1 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:scale-105 transition">
          Explain More
        </button>

        <button className="flex-1 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
          Optimize Code
        </button>
      </div>
    </div>
  );
}