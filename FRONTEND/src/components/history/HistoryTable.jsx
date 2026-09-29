import { useNavigate } from "react-router-dom";

function HistoryTable({ data }) {
  const navigate = useNavigate();

  if (data.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-10 text-center">

        <p className="text-sm text-slate-400">
          No analysis records found.
        </p>

        <p className="mt-2 text-xs text-slate-600">
          Try changing your search or risk filter.
        </p>

      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/40">

      <div className="overflow-x-auto">

        <table className="w-full min-w-[850px] text-left">

          <thead>

            <tr className="border-b border-slate-800/60">

              <th className="px-5 py-4 text-[10px] uppercase tracking-wider text-slate-600">
                Analysis
              </th>

              <th className="px-5 py-4 text-[10px] uppercase tracking-wider text-slate-600">
                Component
              </th>

              <th className="px-5 py-4 text-[10px] uppercase tracking-wider text-slate-600">
                Lot
              </th>

              <th className="px-5 py-4 text-[10px] uppercase tracking-wider text-slate-600">
                Date
              </th>

              <th className="px-5 py-4 text-[10px] uppercase tracking-wider text-slate-600">
                Health
              </th>

              <th className="px-5 py-4 text-[10px] uppercase tracking-wider text-slate-600">
                Risk
              </th>

              <th className="px-5 py-4 text-right text-[10px] uppercase tracking-wider text-slate-600">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {data.map((item) => (

              <tr
                key={item.id}
                className="border-b border-slate-800/40 transition hover:bg-slate-800/20"
              >

                <td className="px-5 py-4">

                  <p className="text-xs font-medium text-slate-300">
                    {item.id}
                  </p>

                </td>

                <td className="px-5 py-4 text-xs text-slate-400">
                  {item.component}
                </td>

                <td className="px-5 py-4 text-xs text-slate-500">
                  {item.lot}
                </td>

                <td className="px-5 py-4 text-xs text-slate-500">
                  {item.date}
                </td>

                <td className="px-5 py-4">

                  <span className="text-xs text-emerald-400">
                    {item.health}%
                  </span>

                </td>

                <td className="px-5 py-4">
                  <RiskBadge risk={item.risk} />
                </td>

                <td className="px-5 py-4 text-right">

                  <button
                    onClick={() =>
                      navigate(`/history/${item.id}`)
                    }
                    className="rounded-lg border border-blue-400/20
                    bg-blue-400/5 px-3 py-1.5 text-[10px]
                    text-blue-400 transition hover:bg-blue-400/10"
                  >
                    View
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
      className={`rounded-md border px-2 py-1 text-[9px] ${
        styles[risk]
      }`}
    >
      {risk}
    </span>
  );
}

export default HistoryTable;