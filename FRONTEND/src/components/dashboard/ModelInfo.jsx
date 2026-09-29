function ModelInfo({ overview, features }) {
  return (
    <div className="space-y-5">

      {/* MODEL STATUS */}

      <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-[10px] uppercase tracking-wider text-slate-600">
              Model Status
            </p>

            <p className="mt-2 text-lg font-semibold text-emerald-400">
              {overview.status}
            </p>

          </div>

          <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />

        </div>

      </div>


      {/* MODEL INFORMATION */}

      <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

        <h2 className="text-lg font-semibold text-slate-200">
          Model Information
        </h2>

        <div className="mt-5 space-y-4">

          <InfoRow
            label="Version"
            value={overview.version}
          />

          <InfoRow
            label="Dataset"
            value={overview.dataset}
          />

          <InfoRow
            label="Last Updated"
            value={overview.lastUpdated}
          />

        </div>

      </div>


      {/* FEATURES */}

      <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

        <h2 className="text-lg font-semibold text-slate-200">
          Input Features
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">

          {features.map((feature) => (

            <span
              key={feature}
              className="rounded-lg border border-blue-400/15
              bg-blue-400/5 px-3 py-2 text-[10px] text-blue-300"
            >
              {feature}
            </span>

          ))}

        </div>

      </div>

    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-800/50 pb-3">

      <span className="text-xs text-slate-600">
        {label}
      </span>

      <span className="text-right text-xs text-slate-400">
        {value}
      </span>

    </div>
  );
}

export default ModelInfo;