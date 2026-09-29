function AnomalySeverity({ severity }) {
  const total =
    severity.normal +
    severity.suspicious +
    severity.highRisk;

  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

      <h2 className="text-lg font-semibold text-slate-200">
        Severity Distribution
      </h2>

      <p className="mt-1 text-xs text-slate-500">
        Current classification of screened components.
      </p>

      <div className="mt-7 space-y-5">

        <SeverityRow
          label="Normal"
          value={severity.normal}
          total={total}
          color="bg-emerald-400"
          text="text-emerald-400"
        />

        <SeverityRow
          label="Suspicious"
          value={severity.suspicious}
          total={total}
          color="bg-yellow-400"
          text="text-yellow-400"
        />

        <SeverityRow
          label="High Risk"
          value={severity.highRisk}
          total={total}
          color="bg-red-400"
          text="text-red-400"
        />

      </div>

    </div>
  );
}

function SeverityRow({
  label,
  value,
  total,
  color,
  text,
}) {
  const percentage = ((value / total) * 100).toFixed(1);

  return (
    <div>

      <div className="flex justify-between">

        <span className="text-xs text-slate-400">
          {label}
        </span>

        <span className={`text-xs ${text}`}>
          {value} ({percentage}%)
        </span>

      </div>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800">

        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
        />

      </div>

    </div>
  );
}

export default AnomalySeverity;