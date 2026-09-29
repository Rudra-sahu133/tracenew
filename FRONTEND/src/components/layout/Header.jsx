import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const pageNames = {
    "/": "Command Center",
    "/features": "Component Analysis",
    "/lot-intelligence": "Lot Intelligence",
    "/history": "History",
    "/model-insights": "Model Performance",
    "/about": "Settings",
  };

  const currentPage = pageNames[location.pathname] || "TRACE-X AI";

  return (
    <header className="sticky top-0 z-40 flex h-[72px] items-center justify-between border-b border-slate-800/60 bg-[#020817]/90 px-6 backdrop-blur-xl lg:px-8">

      {/* Left */}
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400">
          TRACE-X AI
        </p>

        <h2 className="mt-1 text-sm font-semibold text-slate-200">
          {currentPage}
        </h2>
      </div>

      {/* Search */}
      <div className="hidden w-[320px] md:block">

        <div className="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-900/50 px-4 py-2.5">

          <span className="text-sm text-slate-500">
            ⌕
          </span>

          <input
            type="text"
            placeholder="Search components, lots or analysis..."
            className="w-full bg-transparent text-xs text-slate-300 outline-none placeholder:text-slate-600"
          />

          <span className="rounded-md border border-slate-700/50 px-1.5 py-0.5 text-[9px] text-slate-600">
            /
          </span>

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Live Data */}
        <div className="hidden items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 sm:flex">

          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

          <span className="text-xs font-medium text-emerald-400">
            Live Data
          </span>

        </div>

        {/* Notification */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-900/50 text-slate-400 transition hover:border-slate-600 hover:text-white">
          ♢

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-400" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 border-l border-slate-800/60 pl-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-sm font-semibold text-blue-300">
            TX
          </div>

          <div className="hidden sm:block">

            <p className="text-xs font-medium text-slate-200">
              TRACE-X Admin
            </p>

            <p className="text-[9px] text-slate-600">
              AI Operations
            </p>

          </div>

          <span className="hidden text-xs text-slate-600 sm:block">
            ▾
          </span>

        </div>

      </div>

    </header>
  );
}

export default Header;