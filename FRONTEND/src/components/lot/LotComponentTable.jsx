import { useNavigate } from "react-router-dom";

function LotComponentTable({ components }) {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

      <div className="mb-5">

        <h2 className="text-lg font-semibold text-slate-200">
          Component Status
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Component-level health and risk assessment for this lot.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full min-w-[750px] text-left">

          <thead>

            <tr className="border-b border-slate-800/60">

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Component
              </th>

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Health
              </th>

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Anomaly Score
              </th>

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Risk
              </th>

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Status
              </th>

              <th className="pb-3 text-right text-[10px] uppercase tracking-wider text-slate-600">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {components.map((item) => (

              <tr
                key={item.id}
                className="border-b border-slate-800/40"
              >

                <td className="py-4 text-xs font-medium text-slate-300">
                  {item.id}
                </td>

                <td className="py-4">

                  <span className="text-xs text-emerald-400">
                    {item.health}%
                  </span>

                </td>

                <td className="py-4 text-xs text-slate-400">
                  {item.anomalyScore}
                </td>

                <td className="py-4">
                  <RiskBadge risk={item.risk} />
                </td>

                <td className="py-4">
                  <StatusBadge status={item.status} />
                </td>

                <td className="py-4 text-right">

                  <button
                    onClick={() =>
                      navigate("/component-analysis")
                    }
                    className="rounded-lg border border-blue-400/20
                    bg-blue-400/5 px-3 py-1.5 text-[10px]
                    text-blue-400 transition hover:bg-blue-400/10"
                  >
                    Analyze
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

function RiskBadge({ risk }) {
  const styles = {
    Low: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
    Medium: "border-yellow-400/20 bg-yellow-400/10 text-yellow-400",
    High: "border-red-400/20 bg-red-400/10 text-red-400",
  };

  return (
    <span
      className={`rounded-md border px-2 py-1 text-[9px] ${styles[risk]}`}
    >
      {risk}
    </span>
  );
}

function StatusBadge({ status }) {
  const isPass = status === "PASS";

  return (
    <span
      className={`rounded-md border px-2 py-1 text-[9px] ${
        isPass
          ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
          : "border-yellow-400/20 bg-yellow-400/10 text-yellow-400"
      }`}
    >
      {status}
    </span>
  );
}

export default LotComponentTable;