import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";
import { getDemoData } from "../../data/development/demoData.js";

function RiskTrendChart() {
  const [data, setData] = useState(
    getDemoData().commandCenter.riskTrend
  );

  useEffect(() => {
    const handleUpdate = () => {
      setData(getDemoData().commandCenter.riskTrend);
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
    <div className="h-[300px] w-full">

      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >

          <CartesianGrid
            stroke="rgba(148,163,184,0.07)"
            vertical={false}
          />

          <XAxis
            dataKey="checkpoint"
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
              fontSize: 10,
            }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#020817",
              border: "1px solid rgba(96,165,250,0.15)",
              borderRadius: "10px",
              color: "#e2e8f0",
              fontSize: "12px",
            }}
            formatter={(value) => `${value}%`}
          />

          <Line
            type="monotone"
            dataKey="normal"
            name="Normal"
            stroke="#34d399"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="suspicious"
            name="Suspicious"
            stroke="#facc15"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="highRisk"
            name="High Risk"
            stroke="#f87171"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default RiskTrendChart;