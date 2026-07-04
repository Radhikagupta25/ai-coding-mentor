import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function HintsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-3xl p-5 bg-white/5 backdrop-blur-2xl border border-cyan-400/10 shadow-[0_20px_80px_rgba(8,30,60,0.15)]"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/15 text-cyan-200 shadow-sm">
          <Lightbulb className="h-5 w-5" />
          <span className="text-sm font-semibold">AI Hint</span>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-100/80">
          Medium
        </span>
      </div>

      <div className="max-h-[220px] overflow-y-auto pr-2 text-sm leading-6 text-white/75 space-y-3">
        <p>Think before coding. Break the problem into smaller steps.</p>
        <p>Focus on edge cases and plan the input/output flow first.</p>
        <div className="flex items-center gap-2 text-cyan-200">
          <span className="font-medium">Loading hint</span>
          <span className="inline-block h-4 w-1 rounded bg-cyan-300 animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}
