function LotRiskOverview({ distribution }) {
  const total =
    distribution.normal +
    distribution.suspicious +
    distribution.highRisk;

  const normalPercent = ((distribution.normal / total) * 100).toFixed(1);
  const suspiciousPercent = ((distribution.suspicious / total) * 100).toFixed(1);
  const highRiskPercent = ((distribution.highRisk / total) * 100).toFixed(1);

  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

      <div>
        <h2 className="text-lg font-semibold text-slate-200">
          Risk Distribution
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Component classification within the selected lot.
        </p>
      </div>


      <div className="mt-7 space-y-5">

        <RiskRow
          label="Normal"
          count={distribution.normal}
          percentage={normalPercent}
          color="bg-emerald-400"
          textColor="text-emerald-400"
        />

        <RiskRow
          label="Suspicious"
          count={distribution.suspicious}
          percentage={suspiciousPercent}
          color="bg-yellow-400"
          textColor="text-yellow-400"
        />

        <RiskRow
          label="High Risk"
          count={distribution.highRisk}
          percentage={highRiskPercent}
          color="bg-red-400"
          textColor="text-red-400"
        />

      </div>

    </div>
  );
}


function RiskRow({
  label,
  count,
  percentage,
  color,
  textColor,
}) {
  return (
    <div>

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <span className={`h-2 w-2 rounded-full ${color}`} />

          <span className="text-xs text-slate-400">
            {label}
          </span>

        </div>

        <div className="flex gap-3">

          <span className="text-xs text-slate-500">
            {count}
          </span>

          <span className={`text-xs ${textColor}`}>
            {percentage}%
          </span>

        </div>

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

export default LotRiskOverview;