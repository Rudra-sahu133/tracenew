import { useEffect, useState } from "react";

import { getDemoData } from "../../data/development/demoData.js";

function SystemOverview() {
  const [activity, setActivity] = useState(
    getDemoData().commandCenter.latestActivity
  );

  useEffect(() => {
    const handleUpdate = () => {
      setActivity(
        getDemoData().commandCenter.latestActivity
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

  const systems = [
    {
      label: "Screening Engine",
      status: "Operational",
    },
    {
      label: "Data Pipeline",
      status: "Operational",
    },
    {
      label: "Analysis Service",
      status: "Operational",
    },
    {
      label: "Report Generation",
      status: "Operational",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

      <div>
        <h2 className="text-lg font-semibold text-slate-200">
          System Overview
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Current TRACE-X platform status.
        </p>
      </div>

      <div className="mt-6 space-y-4">

        {systems.map((system) => (

          <div
            key={system.label}
            className="flex items-center justify-between rounded-xl border border-slate-800/50 bg-slate-950/30 px-4 py-3"
          >

            <span className="text-xs text-slate-400">
              {system.label}
            </span>

            <div className="flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />

              <span className="text-[10px] text-emerald-400">
                {system.status}
              </span>

            </div>

          </div>

        ))}

      </div>

      <div className="mt-7 rounded-xl border border-blue-400/15 bg-blue-400/5 p-4">

        <p className="text-[10px] uppercase tracking-wider text-blue-400">
          Latest Activity
        </p>

        <p className="mt-2 text-sm text-slate-300">
          {activity.message}
        </p>

        <p className="mt-1 text-xs text-slate-600">
          {activity.time}
        </p>

      </div>

    </div>
  );
}

export default SystemOverview;