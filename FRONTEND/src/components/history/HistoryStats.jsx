function HistoryStats({ data }) {
  const total = data.length;

  const passed = data.filter(
    (item) => item.status === "PASS"
  ).length;

  const review = data.filter(
    (item) => item.status === "REVIEW"
  ).length;

  const averageHealth =
    total === 0
      ? 0
      : Math.round(
          data.reduce((sum, item) => sum + item.health, 0) / total
        );

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

      <Stat
        label="Total Analyses"
        value={total}
        color="text-blue-400"
      />

      <Stat
        label="Passed"
        value={passed}
        color="text-emerald-400"
      />

      <Stat
        label="Requires Review"
        value={review}
        color="text-yellow-400"
      />

      <Stat
        label="Average Health"
        value={`${averageHealth}%`}
        color="text-purple-400"
      />

    </div>
  );
}

function Stat({ label, value, color }) {
  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">

      <p className="text-xs text-slate-500">
        {label}
      </p>

      <p className={`mt-3 text-2xl font-semibold ${color}`}>
        {value}
      </p>

    </div>
  );
}

export default HistoryStats;