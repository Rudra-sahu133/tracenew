function SuspiciousComponents({ components }) {
  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

      <div className="mb-5">

        <h2 className="text-lg font-semibold text-slate-200">
          Suspicious Components
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Components requiring additional inspection.
        </p>

      </div>

      <div className="space-y-3">

        {components.map((item) => (

          <div
            key={item.id}
            className="rounded-xl border border-slate-800/50 bg-slate-950/30 p-4"
          >

            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

              <div>

                <p className="text-sm font-medium text-slate-300">
                  {item.id}
                </p>

                <p className="mt-1 text-[10px] text-slate-600">
                  {item.reason}
                </p>

              </div>

              <div className="flex items-center gap-5">

                <div>

                  <p className="text-[9px] uppercase tracking-wider text-slate-700">
                    Health
                  </p>

                  <p className="mt-1 text-xs text-emerald-400">
                    {item.health}%
                  </p>

                </div>

                <div>

                  <p className="text-[9px] uppercase tracking-wider text-slate-700">
                    Score
                  </p>

                  <p className="mt-1 text-xs text-yellow-400">
                    {item.anomalyScore}
                  </p>

                </div>

                <RiskBadge risk={item.risk} />

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

function RiskBadge({ risk }) {
  const styles = {
    Medium:
      "border-yellow-400/20 bg-yellow-400/10 text-yellow-400",

    High:
      "border-red-400/20 bg-red-400/10 text-red-400",
  };

  return (
    <span
      className={`rounded-md border px-2 py-1 text-[9px] ${styles[risk]}`}
    >
      {risk}
    </span>
  );
}

export default SuspiciousComponents;