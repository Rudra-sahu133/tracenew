function HistoryFilters({
  search,
  setSearch,
  risk,
  setRisk,
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row">

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search analysis, component or lot..."
        className="flex-1 rounded-xl border border-slate-800/60
        bg-slate-900/40 px-4 py-3 text-xs text-slate-200
        outline-none placeholder:text-slate-700
        focus:border-blue-400/40"
      />

      <select
        value={risk}
        onChange={(e) => setRisk(e.target.value)}
        className="rounded-xl border border-slate-800/60
        bg-slate-900/40 px-4 py-3 text-xs text-slate-400
        outline-none"
      >
        <option value="All">All Risk Levels</option>
        <option value="Low">Low Risk</option>
        <option value="Medium">Medium Risk</option>
        <option value="High">High Risk</option>
      </select>

    </div>
  );
}

export default HistoryFilters;