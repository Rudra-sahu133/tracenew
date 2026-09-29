import { useEffect, useState } from "react";
import { getDemoData } from "../../data/development/demoData.js";

function HealthOverview() {
  const [health, setHealth] = useState(
    getDemoData().commandCenter.healthOverview
  );

  useEffect(() => {
    const handleUpdate = () => {
      setHealth(getDemoData().commandCenter.healthOverview);
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

  const styles = {
    normal: {
      dot: "bg-emerald-400",
      text: "text-emerald-400",
    },

    suspicious: {
      dot: "bg-yellow-400",
      text: "text-yellow-400",
    },

    risk: {
      dot: "bg-red-400",
      text: "text-red-400",
    },
  };

  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

      <div>
        <h2 className="text-lg font-semibold text-slate-200">
          Screening Health
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Current screening distribution.
        </p>
      </div>

      <div className="mt-8 flex items-end justify-between">

        <div>

          <p className="text-4xl font-semibold text-emerald-400">
            {health.score}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Components within normal range
          </p>

        </div>

        <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-xs text-emerald-400">
          {health.status}
        </div>

      </div>

      <div className="mt-7 h-2 overflow-hidden rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-emerald-400 transition-all duration-700"
          style={{
            width: health.score,
          }}
        />

      </div>

      <div className="mt-6 space-y-4">

        {health.data.map((item) => {

          const style = styles[item.type];

          return (
            <div
              key={item.label}
              className="flex items-center justify-between"
            >

              <div className="flex items-center gap-3">

                <span
                  className={`h-2.5 w-2.5 rounded-full ${style.dot}`}
                />

                <span className="text-xs text-slate-400">
                  {item.label}
                </span>

              </div>

              <div className="flex items-center gap-4">

                <span className="text-xs text-slate-300">
                  {item.value}
                </span>

                <span
                  className={`w-12 text-right text-[10px] ${style.text}`}
                >
                  {item.percentage}
                </span>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default HealthOverview;