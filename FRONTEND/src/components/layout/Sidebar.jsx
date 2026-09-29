import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Command Center",
    path: "/",
    icon: "⌂",
  },
 {
  name: "Component Analysis",
  path: "/component-analysis",
  icon: "▣",
},
  {
    name: "Lot Intelligence",
    path: "/lot-intelligence",
    icon: "◇",
  },
  {
    name: "History",
    path: "/history",
    icon: "▤",
  },
  {
    name: "Model Performance",
    path: "/model-insights",
    icon: "▥",
  },
  {
  name: "Anomaly Analysis",
  path: "/anomaly-analysis",
  icon: "△",
},
{
  name: "Reports",
  path: "/reports",
  icon: "▤",
},
  {
  name: "Settings",
  path: "/settings",
  icon: "⚙",
},
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[250px] flex-col border-r border-slate-800/60 bg-[#020817] lg:flex">

      {/* Logo */}
      <div className="border-b border-slate-800/60 px-6 py-6">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-blue-400">
            ◇
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide text-white">
              TRACE-X
            </h1>

            <p className="mt-0.5 text-[9px] uppercase tracking-[0.18em] text-slate-500">
              Semiconductor Intelligence
            </p>
          </div>

        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-3 py-6">

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `group flex items-center gap-4 rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                isActive
                  ? "border-l-2 border-blue-400 bg-blue-500/15 text-blue-300"
                  : "border-l-2 border-transparent text-slate-400 hover:bg-slate-800/40 hover:text-slate-200"
              }`
            }
          >

            <span className="flex w-5 justify-center text-base">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </NavLink>
        ))}

      </nav>

      {/* Bottom status */}
      <div className="border-t border-slate-800/60 px-6 py-5">

        <div className="flex items-center gap-2 text-xs text-emerald-400">

          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

          System Online

        </div>

        <p className="mt-2 text-[10px] text-slate-600">
          TRACE-X AI v1.0.0
        </p>

      </div>

    </aside>
  );
}

export default Sidebar;