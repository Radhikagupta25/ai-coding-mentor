import React from "react";
import { Home, Code, Clock, Settings } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Dashboard", icon: Home },
  { label: "My Submissions", icon: Code },
  { label: "History", icon: Clock },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-72 hidden md:block px-4 py-6"
    >
      <div className="h-full sticky top-20">
        <nav className="space-y-3">
          {navItems.map((it, idx) => {
            const Icon = it.icon;
            const active = idx === 0;
            return (
              <motion.a
                key={it.label}
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.995 }}
                transition={{ duration: 0.2 }}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${active ? 'bg-gradient-to-r from-cyan-700/20 to-blue-700/10 ring-1 ring-cyan-400/30' : 'hover:bg-white/3'}`}
                style={active ? { boxShadow: '0 6px 18px rgba(46, 213, 255, 0.06)' } : undefined}
              >
                <div className={`p-2 rounded-md text-white ${active ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-glow' : 'bg-white/3'}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className={`font-medium ${active ? 'text-cyan-200' : 'text-white/90'}`}>{it.label}</span>
              </motion.a>
            );
          })}
        </nav>
      </div>
    </motion.aside>
  );
}
