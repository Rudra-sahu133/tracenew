import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function IsolationGraph({ data }) {
  const normal = data.filter(
    (item) => item.status === "Normal"
  );

  const suspicious = data.filter(
    (item) => item.status === "Suspicious"
  );

  const highRisk = data.filter(
    (item) => item.status === "High Risk"
  );

  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

      <div className="mb-5">

        <h2 className="text-lg font-semibold text-slate-200">
          Isolation Analysis
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Component distribution based on anomaly score and health.
        </p>

      </div>

      <div className="h-[340px]">

        <ResponsiveContainer width="100%" height="100%">

          <ScatterChart>

            <CartesianGrid
              stroke="rgba(148,163,184,0.08)"
            />

            <XAxis
              type="number"
              dataKey="score"
              name="Anomaly Score"
              domain={[0, 1]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748b",
                fontSize: 10,
              }}
            />

            <YAxis
              type="number"
              dataKey="health"
              name="Health"
              domain={[50, 100]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748b",
                fontSize: 10,
              }}
            />

            <Tooltip
              cursor={{
                strokeDasharray: "4 4",
              }}
              contentStyle={{
                background: "#020817",
                border: "1px solid rgba(148,163,184,0.15)",
                borderRadius: "10px",
              }}
              formatter={(value, name) => [
                value,
                name === "score"
                  ? "Anomaly Score"
                  : "Health",
              ]}
            />

            <Scatter
              name="Normal"
              data={normal}
              fill="#34d399"
            />

            <Scatter
              name="Suspicious"
              data={suspicious}
              fill="#facc15"
            />

            <Scatter
              name="High Risk"
              data={highRisk}
              fill="#f87171"
            />

          </ScatterChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-4 flex justify-center gap-5">

        <LegendItem
          label="Normal"
          color="bg-emerald-400"
        />

        <LegendItem
          label="Suspicious"
          color="bg-yellow-400"
        />

        <LegendItem
          label="High Risk"
          color="bg-red-400"
        />

      </div>

    </div>
  );
}

function LegendItem({ label, color }) {
  return (
    <div className="flex items-center gap-2">

      <span className={`h-2 w-2 rounded-full ${color}`} />

      <span className="text-[10px] text-slate-500">
        {label}
      </span>

    </div>
  );
}

export default IsolationGraph;