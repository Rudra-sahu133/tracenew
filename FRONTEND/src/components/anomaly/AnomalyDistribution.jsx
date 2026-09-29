import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AnomalyDistribution({ data }) {
  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

      <div className="mb-4">

        <h2 className="text-lg font-semibold text-slate-200">
          Anomaly Distribution
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Distribution of screened components by risk category.
        </p>

      </div>

      <div className="h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={58}
              paddingAngle={3}
            >

              <Cell fill="#34d399" />
              <Cell fill="#facc15" />
              <Cell fill="#f87171" />

            </Pie>

            <Tooltip
              contentStyle={{
                background: "#020817",
                border: "1px solid rgba(148,163,184,0.15)",
                borderRadius: "10px",
              }}
            />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-2 flex justify-center gap-5">

        {data.map((item) => (

          <div
            key={item.name}
            className="flex items-center gap-2"
          >

            <span
              className={`h-2 w-2 rounded-full ${
                item.name === "Normal"
                  ? "bg-emerald-400"
                  : item.name === "Suspicious"
                    ? "bg-yellow-400"
                    : "bg-red-400"
              }`}
            />

            <span className="text-[10px] text-slate-500">
              {item.name} ({item.value})
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AnomalyDistribution;