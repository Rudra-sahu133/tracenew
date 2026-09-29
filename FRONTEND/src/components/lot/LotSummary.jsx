function LotSummary({ summary }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">

      <SummaryCard
        label="Total Components"
        value={summary.totalComponents}
        color="text-blue-400"
      />

      <SummaryCard
        label="Normal"
        value={summary.normal}
        color="text-emerald-400"
      />

      <SummaryCard
        label="Suspicious"
        value={summary.suspicious}
        color="text-yellow-400"
      />

      <SummaryCard
        label="High Risk"
        value={summary.highRisk}
        color="text-red-400"
      />

      <SummaryCard
        label="Average Health"
        value={`${summary.averageHealth}%`}
        color="text-purple-400"
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

export default LotSummary;