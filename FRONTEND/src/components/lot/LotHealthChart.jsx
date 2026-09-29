import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function LotHealthChart({ data }) {
  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

      <div className="mb-6">

        <h2 className="text-lg font-semibold text-slate-200">
          Lot Health Trend
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Average component health across screening checkpoints.
        </p>

      </div>

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid
              stroke="rgba(148,163,184,0.08)"
              vertical={false}
            />

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748b",
                fontSize: 11,
              }}
            />

            <YAxis
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748b",
                fontSize: 11,
              }}
            />

            <Tooltip
              contentStyle={{
                background: "#020817",
                border: "1px solid rgba(148,163,184,0.15)",
                borderRadius: "10px",
              }}
            />

            <Line
              type="monotone"
              dataKey="health"
              name="Health"
              stroke="#60a5fa"
              strokeWidth={2}
              dot={{ r: 3 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default LotHealthChart;