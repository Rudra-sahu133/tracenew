function AnomalyTable({ detections }) {
  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

      <div className="mb-5">

        <h2 className="text-lg font-semibold text-slate-200">
          Recent Anomaly Detections
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Components requiring additional inspection.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full min-w-[700px] text-left">

          <thead>

            <tr className="border-b border-slate-800/60">

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Component
              </th>

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Parameter
              </th>

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Value
              </th>

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Checkpoint
              </th>

              <th className="pb-3 text-right text-[10px] uppercase tracking-wider text-slate-600">
                Severity
              </th>

            </tr>

          </thead>

          <tbody>

            {detections.map((item) => (

              <tr
                key={`${item.id}-${item.parameter}`}
                className="border-b border-slate-800/40"
              >

                <td className="py-4 text-xs font-medium text-slate-300">
                  {item.id}
                </td>

                <td className="py-4 text-xs text-slate-400">
                  {item.parameter}
                </td>

                <td className="py-4 text-xs text-slate-400">
                  {item.value} {item.unit}
                </td>

                <td className="py-4 text-xs text-slate-500">
                  {item.checkpoint}
                </td>

                <td className="py-4 text-right">
                  <SeverityBadge severity={item.severity} />
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

function SeverityBadge({ severity }) {
  const styles = {
    Suspicious:
      "border-yellow-400/20 bg-yellow-400/10 text-yellow-400",

    "High Risk":
      "border-red-400/20 bg-red-400/10 text-red-400",
  };

  return (
    <span
      className={`rounded-md border px-2 py-1 text-[9px] ${
        styles[severity] || styles.Suspicious
      }`}
    >
      {severity}
    </span>
  );
}

export default AnomalyTable;