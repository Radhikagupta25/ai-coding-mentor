import BottomToolbar from "../components/dashboard/BottomToolbar";
import CodeEditor from "../components/editor/CodeEditor";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
        <main className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="h-[70vh] rounded-2xl bg-gradient-to-br from-[#071029]/50 to-[#051026]/60 border border-cyan-700/10 shadow-lg p-6"
            style={{ backdropFilter: 'blur(6px)' }}
          >
            <div className="h-full rounded-xl p-4 bg-gradient-to-b from-black/30 to-white/2 border border-white/4 flex flex-col">
              <div className="flex flex-col gap-4 mb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-sm">TS</div>
                  <div>
                    <div className="text-sm text-cyan-200">📄 main.ts</div>
                    <div className="text-xs text-white/50">TypeScript</div>
                  </div>
                </div>
                <div className="text-sm text-white/60">Auto Save • ON</div>
              </div>

              <div className="flex-1 overflow-hidden rounded-2xl border border-cyan-800/20 bg-[#020617] shadow-inner">
                <CodeEditor />
              </div>

              <div className="mt-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/10 p-3 text-sm text-cyan-100 shadow-sm">
                🤖 AI Mentor Ready
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="rounded-3xl p-5 bg-white/5 backdrop-blur-2xl border border-cyan-500/10 shadow-[0_20px_80px_rgba(8,30,60,0.15)] hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-semibold text-white">Today's Progress</div>
                  <p className="text-xs text-white/50">Keep your momentum going</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">Problems Solved</div>
                    <div className="mt-2 text-2xl font-semibold text-cyan-100">8</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">Time Spent</div>
                    <div className="mt-2 text-2xl font-semibold text-cyan-100">2h 24m</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50">Accuracy</div>
                  <div className="mt-2 text-2xl font-semibold text-cyan-100">92%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="rounded-3xl p-5 bg-white/5 backdrop-blur-2xl border border-purple-500/10 shadow-[0_20px_80px_rgba(8,30,60,0.15)] hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-semibold text-white">Coding Streak</div>
                  <p className="text-xs text-white/50">Stay on the leaderboard</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">Current Streak</div>
                    <div className="mt-2 text-2xl font-semibold text-purple-100">5 days</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">Best Streak</div>
                    <div className="mt-2 text-2xl font-semibold text-purple-100">18 days</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50">Rank</div>
                  <div className="mt-2 text-2xl font-semibold text-purple-100">#42</div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        <aside>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="rounded-2xl p-4 bg-gradient-to-br from-slate-800/30 to-slate-900/40 border border-white/6 shadow-lg mb-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">💡 AI Hint</div>
              <div className="text-xs text-white/50">Difficulty: <span className="font-medium text-cyan-200">Medium</span></div>
            </div>
            <p className="mt-3 text-sm text-white/70">“Think before coding. Break the problem into smaller steps.”</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 }} className="rounded-2xl p-4 bg-gradient-to-br from-slate-800/20 to-slate-900/30 border border-white/6 shadow-lg">
            <div className="text-sm font-semibold">Result</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-white/70">
              <div>Status</div>
              <div className="font-medium">Waiting...</div>

              <div>Runtime</div>
              <div className="font-medium">--</div>

              <div>Memory</div>
              <div className="font-medium">--</div>
            </div>
          </motion.div>
        </aside>
      </div>

      <BottomToolbar />
    </div>
  );
}
