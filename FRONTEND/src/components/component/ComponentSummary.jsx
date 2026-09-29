function ComponentSummary({ component }) {
  const riskStyles = {
    Low: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
    Medium: "border-yellow-400/20 bg-yellow-400/10 text-yellow-400",
    High: "border-red-400/20 bg-red-400/10 text-red-400",
  };

  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

        <div>

          <p className="text-[10px] uppercase tracking-wider text-slate-600">
            Component
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-slate-100">
            {component.id}
          </h2>

          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">

            <span>
              Lot:
              <span className="ml-1 text-slate-300">
                {component.lot}
              </span>
            </span>

            <span>
              Type:
              <span className="ml-1 text-slate-300">
                {component.type}
              </span>
            </span>

            <span>
              Manufacturer:
              <span className="ml-1 text-slate-300">
                {component.manufacturer}
              </span>
            </span>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <span className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-400">
            {component.status}
          </span>

          <span
            className={`rounded-lg border px-3 py-1.5 text-xs ${
              riskStyles[component.risk] || riskStyles.Low
            }`}
          >
            {component.risk} Risk
          </span>

        </div>

      </div>


      <div className="mt-7 border-t border-slate-800/60 pt-6">

        <div className="flex items-end justify-between">

          <div>
            <p className="text-xs text-slate-500">
              Component Health
            </p>

            <p className="mt-2 text-4xl font-semibold text-emerald-400">
              {component.healthScore}%
            </p>
          </div>

          <span className="text-xs text-slate-600">
            Overall health score
          </span>

        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-emerald-400"
            style={{
              width: `${component.healthScore}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}

export default ComponentSummary;