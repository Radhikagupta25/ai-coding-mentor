import { motion } from "framer-motion";

const stats = [
  { label: "Status", value: "Waiting...", variant: "bg-yellow-500/10 text-yellow-200" },
  { label: "Runtime", value: "--", variant: "bg-slate-700/70 text-slate-100" },
  { label: "Memory", value: "--", variant: "bg-slate-700/70 text-slate-100" },
  { label: "Language", value: "TypeScript", variant: "bg-cyan-500/10 text-cyan-200" },
  { label: "Test Cases", value: "0 / 0", variant: "bg-purple-500/10 text-purple-200" },
];

export default function ResultPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.05 }}
      className="rounded-3xl p-5 bg-white/5 backdrop-blur-2xl border border-blue-500/10 shadow-[0_20px_80px_rgba(8,30,60,0.15)]"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold text-white">Result</h3>
          <p className="text-xs text-white/50">Submission summary</p>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
          Live
        </span>
      </div>

      <div className="grid gap-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className={`rounded-2xl border border-white/10 p-4 ${item.variant} bg-white/5 shadow-sm`}
          >
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">{item.label}</div>
            <div className="mt-2 text-lg font-semibold text-white">{item.value}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
