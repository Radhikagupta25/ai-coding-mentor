import {
  LayoutDashboard,
  Code2,
  BrainCircuit,
  History,
  Settings,
  Trophy,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Code Editor",
    icon: Code2,
  },
  {
    title: "AI Mentor",
    icon: BrainCircuit,
  },
  {
    title: "History",
    icon: History,
  },
  {
    title: "Leaderboard",
    icon: Trophy,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="h-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">

      <h2 className="text-2xl font-bold mb-10">
        Workspace
      </h2>

      <div className="space-y-3">

        {menu.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              className={`w-full flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300

              ${
                item.active
                  ? "bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/40"
                  : "hover:bg-white/10 text-gray-300 hover:text-white"
              }
              `}
            >
              <Icon size={20} />

              {item.title}
            </button>

          );
        })}
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/20 p-5">

        <p className="text-sm text-gray-300">
          Daily Progress
        </p>

        <h3 className="text-4xl font-bold mt-2">
          76%
        </h3>

        <div className="w-full h-2 bg-white/10 rounded-full mt-5">

          <div className="h-2 w-3/4 rounded-full bg-cyan-400"></div>

        </div>

      </div>

    </aside>
  );
}