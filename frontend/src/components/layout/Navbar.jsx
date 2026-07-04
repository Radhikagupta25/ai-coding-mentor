import { motion } from "framer-motion";
import { FiCode, FiCpu, FiBookOpen, FiAward } from "react-icons/fi";

const navItems = [
  { title: "Features", icon: <FiCpu size={18} /> },
  { title: "Practice", icon: <FiCode size={18} /> },
  { title: "Leaderboard", icon: <FiAward size={18} /> },
  { title: "Resources", icon: <FiBookOpen size={18} /> },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-cyan-500/30">
            AI
          </div>

          <div>
            <h1 className="text-xl font-bold">
              Coding Mentor
            </h1>

            <p className="text-xs text-gray-400">
              Learn • Practice • Improve
            </p>
          </div>

        </div>

        {/* Menu */}

        <div className="hidden md:flex items-center gap-10">

          {navItems.map((item) => (
            <button
              key={item.title}
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              {item.icon}
              {item.title}
            </button>
          ))}

        </div>

        {/* CTA */}

        <button
          className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/40"
        >
          Get Started
        </button>

      </div>
    </motion.nav>
  );
}