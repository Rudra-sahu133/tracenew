import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import AnomalySummary from "../components/anomaly/AnomalySummary.jsx";
import AnomalyDistribution from "../components/anomaly/AnomalyDistribution.jsx";
import IsolationGraph from "../components/anomaly/IsolationGraph.jsx";
import SuspiciousComponents from "../components/anomaly/SuspiciousComponents.jsx";

import { getDemoData } from "../data/development/demoData.js";

function AnomalyAnalysis() {
  const [, setDataVersion] = useState(0);

  useEffect(() => {
    const handleDataUpdate = () => {
      setDataVersion((value) => value + 1);
    };

    window.addEventListener(
      "trace-x-data-updated",
      handleDataUpdate
    );

    return () => {
      window.removeEventListener(
        "trace-x-data-updated",
        handleDataUpdate
      );
    };
  }, []);

  const data = getDemoData();

  const {
    summary,
    distribution,
    isolationData,
    suspiciousComponents,
    checkpointTrend,
  } = data.anomalyAnalysis;

  return (
    <div className="min-h-screen bg-[#020817]/60 px-5 py-7 text-slate-100 lg:px-8">

      {/* ================= HEADER ================= */}

      <section>

        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-red-400">
          Anomaly Intelligence
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Anomaly Analysis
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-500">
          Analyze detected anomalies, component isolation behaviour
          and screening risk across qualification checkpoints.
        </p>

      </section>


      {/* ================= SUMMARY ================= */}

      <section className="mt-7">

        <AnomalySummary
          summary={summary}
        />

      </section>


      {/* ================= DISTRIBUTION + ISOLATION ================= */}

      <section className="mt-6 grid gap-5 xl:grid-cols-2">

        <AnomalyDistribution
          data={distribution}
        />

        <IsolationGraph
          data={isolationData}
        />

      </section>


      {/* ================= CHECKPOINT TREND ================= */}

      <section className="mt-6 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">

        <div className="mb-5">

          <h2 className="text-lg font-semibold text-slate-200">
            Anomaly Trend
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Number of detected anomalous components across checkpoints.
          </p>

        </div>

        <div className="h-[280px]">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart
              data={checkpointTrend}
              margin={{
                top: 10,
                right: 10,
                left: -20,
                bottom: 0,
              }}
            >

              <CartesianGrid
                stroke="rgba(148,163,184,0.08)"
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
                  color: "#e2e8f0",
                  fontSize: "12px",
                }}
              />

              <Line
                type="monotone"
                dataKey="anomalies"
                name="Detected Anomalies"
                stroke="#f87171"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </section>


      {/* ================= SUSPICIOUS COMPONENTS ================= */}

      <section className="mt-6">

        <SuspiciousComponents
          components={suspiciousComponents}
        />

      </section>


      {/* ================= ANALYSIS NOTE ================= */}

      <section className="mt-6 rounded-2xl border border-yellow-400/15 bg-yellow-400/5 p-6">

        <p className="text-[10px] uppercase tracking-[0.2em] text-yellow-400">
          Analysis Note
        </p>

        <h2 className="mt-2 text-lg font-semibold text-slate-200">
          Suspicious components require additional screening
        </h2>

        <p className="mt-2 max-w-3xl text-xs leading-5 text-slate-500">
          Components with elevated anomaly scores are isolated for
          further inspection. Recorded parameter behaviour and
          checkpoint history should be reviewed before final
          qualification decisions.
        </p>

      </section>

    </div>
  );
}

export default AnomalyAnalysis;