function ReportSummary({ reports }) {
  const total = reports.length;

  const highRisk = reports.filter(
    (item) => item.risk === "High"
  ).length;

  const mediumRisk = reports.filter(
    (item) => item.risk === "Medium"
  ).length;

  const averageHealth =
    reports.reduce((sum, item) => sum + item.health, 0) / total;

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

      <SummaryCard
        label="Total Reports"
        value={total}
        color="text-blue-400"
      />

      <SummaryCard
        label="High Risk Reports"
        value={highRisk}
        color="text-red-400"
      />

      <SummaryCard
        label="Medium Risk Reports"
        value={mediumRisk}
        color="text-yellow-400"
      />

      <SummaryCard
        label="Average Health"
        value={`${averageHealth.toFixed(1)}%`}
        color="text-emerald-400"
      />

    </div>
  );
}

function SummaryCard({ label, value, color }) {
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

export default ReportSummary;