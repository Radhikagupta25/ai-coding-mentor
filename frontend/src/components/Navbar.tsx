import React from "react";
import { motion } from "framer-motion";
import { Sparkles, UserCircle } from "lucide-react";
import ThemeToggle from "./shared/ThemeToggle";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="w-full sticky top-0 z-40"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-3 py-2 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))', boxShadow: '0 6px 20px rgba(2,6,23,0.6)' }}>
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white shadow-glow">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-semibold tracking-wide">AI Coding Mentor</div>
                <div className="text-xs text-cyan-300/70">Build • Learn • Improve</div>
              </div>
            </div>
            <div className="hidden sm:block text-sm text-cyan-200/80">Welcome back, Developer</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-white/2 border border-cyan-400/6">
              <UserCircle className="h-6 w-6 text-cyan-300/90" />
              <div className="text-sm">You</div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
