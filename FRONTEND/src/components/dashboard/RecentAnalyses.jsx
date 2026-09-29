import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getDemoData } from "../../data/development/demoData.js";

function RecentAnalyses() {
  const navigate = useNavigate();

  const [analyses, setAnalyses] = useState(
    getDemoData().commandCenter.recentAnalyses
  );

  useEffect(() => {
    const handleUpdate = () => {
      setAnalyses(
        getDemoData().commandCenter.recentAnalyses
      );
    };

    window.addEventListener(
      "trace-x-data-updated",
      handleUpdate
    );

    return () => {
      window.removeEventListener(
        "trace-x-data-updated",
        handleUpdate
      );
    };
  }, []);

  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

      <div className="mb-5 flex items-center justify-between">

        <div>
          <h2 className="text-lg font-semibold text-slate-200">
            Recent Analyses
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Latest component screening activity.
          </p>
        </div>

        <button
          onClick={() => navigate("/history")}
          className="text-xs text-blue-400 transition hover:text-blue-300"
        >
          View History →
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full min-w-[700px] text-left">

          <thead>

            <tr className="border-b border-slate-800/60">

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Analysis
              </th>

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Component
              </th>

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Lot
              </th>

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Health
              </th>

              <th className="pb-3 text-[10px] uppercase tracking-wider text-slate-600">
                Status
              </th>

              <th className="pb-3 text-right text-[10px] uppercase tracking-wider text-slate-600">
                Time
              </th>

            </tr>

          </thead>

          <tbody>

            {analyses.map((item) => (

              <tr
                key={item.id}
                className="border-b border-slate-800/40 transition hover:bg-slate-800/20"
              >

                <td className="py-4 text-xs font-medium text-slate-300">
                  {item.id}
                </td>

                <td className="py-4 text-xs text-slate-400">
                  {item.component}
                </td>

                <td className="py-4 text-xs text-slate-500">
                  {item.lot}
                </td>

                <td className="py-4 text-xs text-slate-300">
                  {item.health}
                </td>

                <td className="py-4">
                  <StatusBadge status={item.status} />
                </td>

                <td className="py-4 text-right text-xs text-slate-600">
                  {item.time}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

function StatusBadge({ status }) {

  const styles = {
    NORMAL:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",

    REVIEW:
      "border-yellow-400/20 bg-yellow-400/10 text-yellow-400",

    "HIGH RISK":
      "border-red-400/20 bg-red-400/10 text-red-400",
  };

  return (
    <span
      className={`rounded-md border px-2 py-1 text-[9px] font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default RecentAnalyses;