import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { historyDetailsData } from "../data/development/historyDetailsData.js";
import { useNavigate } from "react-router-dom";

function HistoryDetails() {
  const navigate = useNavigate();

  const {
    analysis,
    component,
    checkpoints,
    parameters,
  } = historyDetailsData;

  return (
    <div className="min-h-screen bg-[#020817]/60 px-6 py-8 text-slate-100 lg:px-10">

      {/* ================= HEADER ================= */}

      <section>
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              Historical Analysis
            </p>

            <h1 className="text-3xl font-semibold tracking-tight">
              Analysis Details
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Detailed screening result and component behaviour
              captured during a previous analysis.
            </p>
          </div>

          <div className="flex gap-3">

            {/* Back */}
            <button
              onClick={() => navigate(-1)}
              className="rounded-xl border border-slate-700/40 bg-slate-900/50 px-4 py-2.5 text-xs text-slate-400 transition hover:bg-slate-800/60 hover:text-slate-200"
            >
              ← Back
            </button>

            {/* Generate Report */}
            <button
              onClick={() =>
                navigate(`/report/${analysis.id}`, {
                  state: {
                    analysis: historyDetailsData,
                  },
                })
              }
              className="rounded-xl border border-blue-400/20 bg-blue-500/10 px-5 py-2.5 text-xs font-medium text-blue-400 transition hover:bg-blue-500/20"
            >
              Generate Report
            </button>

          </div>
        </div>
      </section>

      {/* ================= COMPONENT INFO ================= */}

      <section className="mt-8 rounded-2xl border border-slate-700/30 bg-slate-900/40 p-6 backdrop-blur-xl">

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

          <div>
            <p className="text-[10px] uppercase tracking-wider text-slate-600">
              Component
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-slate-200">
              {component.id}
            </h2>

            <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-500">

              <span>
                Lot:{" "}
                <span className="text-slate-400">
                  {component.lot}
                </span>
              </span>

              <span>
                Analysis ID:{" "}
                <span className="text-slate-400">
                  {analysis.id}
                </span>
              </span>

              <span>
                Date:{" "}
                <span className="text-slate-400">
                  {analysis.date}
                </span>
              </span>

            </div>
          </div>

          <div className="flex gap-3">

            <InfoBadge
              label={component.status}
              type="success"
            />

            <InfoBadge
              label={`${component.risk} Risk`}
              type={
                component.risk === "High"
                  ? "danger"
                  : component.risk === "Medium"
                    ? "warning"
                    : "success"
              }
            />

          </div>

        </div>
      </section>

      {/* ================= SUMMARY ================= */}

      <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <MetricCard
          title="Health Score"
          value={`${component.healthScore}%`}
          color="text-emerald-400"
        />

        <MetricCard
          title="Anomaly Score"
          value={component.anomalyScore}
          color="text-yellow-400"
        />

        <MetricCard
          title="Latest Checkpoint"
          value={component.latestCheckpoint}
          color="text-blue-400"
        />

        <MetricCard
          title="Analysis Status"
          value={component.status}
          color="text-emerald-400"
        />

      </section>

      {/* ================= CHART + CONCLUSION ================= */}

      <section className="mt-6 grid gap-5 xl:grid-cols-[1.6fr_1fr]">

        {/* Graph */}

        <div className="rounded-2xl border border-slate-700/30 bg-slate-900/40 p-6 backdrop-blur-xl">

          <div className="mb-6">

            <h2 className="text-lg font-semibold">
              Screening Behaviour
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Parameter behaviour recorded across screening checkpoints.
            </p>

          </div>

          <div className="h-[320px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <LineChart data={checkpoints}>

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
                    border:
                      "1px solid rgba(148,163,184,0.15)",
                    borderRadius: "10px",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="iddq"
                  name="Iddq"
                  stroke="#60a5fa"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />

                <Line
                  type="monotone"
                  dataKey="delay"
                  name="Propagation Delay"
                  stroke="#a78bfa"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />

              </LineChart>

            </ResponsiveContainer>
          </div>
        </div>

        {/* Conclusion */}

        <div className="rounded-2xl border border-slate-700/30 bg-slate-900/40 p-6 backdrop-blur-xl">

          <h2 className="text-lg font-semibold">
            Screening Conclusion
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Final assessment from this screening analysis.
          </p>

          <div className="mt-8">

            <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-5">

              <p className="text-xs uppercase tracking-wider text-emerald-400">
                Assessment
              </p>

              <p className="mt-3 text-xl font-semibold text-slate-200">
                {analysis.conclusion}
              </p>

            </div>

            <div className="mt-5 space-y-4">

              <ConclusionRow
                label="Health"
                value={analysis.healthStatus}
              />

              <ConclusionRow
                label="Anomaly"
                value={analysis.anomalyStatus}
              />

              <ConclusionRow
                label="Degradation"
                value={analysis.degradationStatus}
              />

              <ConclusionRow
                label="Recommendation"
                value={analysis.recommendation}
              />

            </div>

          </div>
        </div>

      </section>

      {/* ================= PARAMETERS ================= */}

      <section className="mt-6">

        <div className="mb-4">

          <h2 className="text-lg font-semibold">
            Recorded Parameters
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Latest values captured during this analysis.
          </p>

        </div>

        <div className="grid gap-4 md:grid-cols-3">

          <ParameterCard
            title="Iddq / Leakage"
            value={parameters.iddq}
            unit="µA"
          />

          <ParameterCard
            title="Propagation Delay"
            value={parameters.delay}
            unit="ns"
          />

          <ParameterCard
            title="Supply Voltage"
            value={parameters.voltage}
            unit="V"
          />

        </div>
      </section>

      {/* ================= TIMELINE ================= */}

      <section className="mt-6 rounded-2xl border border-slate-700/30 bg-slate-900/40 p-6 backdrop-blur-xl">

        <div className="mb-6">

          <h2 className="text-lg font-semibold">
            Screening Timeline
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Complete checkpoint history for this analysis.
          </p>

        </div>

        <div className="space-y-4">

          {checkpoints.map((item, index) => (

            <div
              key={item.time}
              className="flex gap-4"
            >

              {/* Timeline */}

              <div className="flex flex-col items-center">

                <div
                  className={`h-3 w-3 rounded-full ${
                    item.status === "PASS"
                      ? "bg-emerald-400"
                      : item.status === "REVIEW"
                        ? "bg-yellow-400"
                        : "bg-red-400"
                  }`}
                />

                {index !== checkpoints.length - 1 && (
                  <div className="mt-1 h-full w-px bg-slate-800" />
                )}

              </div>

              {/* Content */}

              <div className="flex-1 pb-5">

                <div className="flex flex-col justify-between gap-2 sm:flex-row">

                  <div>

                    <p className="text-sm font-medium text-slate-300">
                      {item.time}
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                      Screening checkpoint
                    </p>

                  </div>

                  <span
                    className={`self-start rounded-md border px-2 py-1 text-[10px] ${
                      item.status === "PASS"
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                        : item.status === "REVIEW"
                          ? "border-yellow-400/20 bg-yellow-400/10 text-yellow-400"
                          : "border-red-400/20 bg-red-400/10 text-red-400"
                    }`}
                  >
                    {item.status}
                  </span>

                </div>

                <div className="mt-3 grid grid-cols-3 gap-3">

                  <SmallValue
                    label="Iddq"
                    value={`${item.iddq} µA`}
                  />

                  <SmallValue
                    label="Delay"
                    value={`${item.delay} ns`}
                  />

                  <SmallValue
                    label="Voltage"
                    value={`${item.voltage} V`}
                  />

                </div>

              </div>
            </div>

          ))}

        </div>
      </section>

    </div>
  );
}


/* ============================= */
/* METRIC CARD */
/* ============================= */

function MetricCard({
  title,
  value,
  color,
}) {
  return (
    <div className="rounded-2xl border border-slate-700/30 bg-slate-900/40 p-5 backdrop-blur-xl">

      <p className="text-xs text-slate-500">
        {title}
      </p>

      <p className={`mt-3 text-2xl font-semibold ${color}`}>
        {value}
      </p>

    </div>
  );
}


/* ============================= */
/* INFO BADGE */
/* ============================= */

function InfoBadge({
  label,
  type,
}) {
  const styles = {
    success:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",

    warning:
      "border-yellow-400/20 bg-yellow-400/10 text-yellow-400",

    danger:
      "border-red-400/20 bg-red-400/10 text-red-400",
  };

  return (
    <span
      className={`rounded-lg border px-3 py-1.5 text-xs ${styles[type]}`}
    >
      {label}
    </span>
  );
}


/* ============================= */
/* CONCLUSION ROW */
/* ============================= */

function ConclusionRow({
  label,
  value,
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-800/50 pb-3">

      <span className="text-xs text-slate-600">
        {label}
      </span>

      <span className="max-w-[65%] text-right text-xs text-slate-400">
        {value}
      </span>

    </div>
  );
}


/* ============================= */
/* PARAMETER CARD */
/* ============================= */

function ParameterCard({
  title,
  value,
  unit,
}) {
  return (
    <div className="rounded-2xl border border-slate-700/30 bg-slate-900/40 p-5 backdrop-blur-xl">

      <p className="text-xs text-slate-500">
        {title}
      </p>

      <div className="mt-4 flex items-end gap-2">

        <span className="text-2xl font-semibold text-slate-200">
          {value}
        </span>

        <span className="mb-1 text-xs text-slate-600">
          {unit}
        </span>

      </div>

    </div>
  );
}


/* ============================= */
/* SMALL VALUE */
/* ============================= */

function SmallValue({
  label,
  value,
}) {
  return (
    <div className="rounded-lg border border-slate-800/50 bg-slate-950/30 p-3">

      <p className="text-[9px] uppercase tracking-wider text-slate-700">
        {label}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {value}
      </p>

    </div>
  );
}

export default HistoryDetails;
