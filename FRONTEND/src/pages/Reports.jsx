import { useLocation, useNavigate } from "react-router-dom";
import { historyDetailsData } from "../data/development/historyDetailsData.js";

function Report() {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state?.analysis || historyDetailsData;

  const { analysis, component, parameters, checkpoints } = data;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#020817]/60 px-6 py-8 text-slate-100 lg:px-12">

      {/* ================= HEADER ================= */}

      <div className="flex flex-col justify-between gap-5 border-b border-slate-800/60 pb-6 md:flex-row md:items-end">

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
            TRACE-X AI
          </p>

          <h1 className="mt-2 text-3xl font-semibold">
            Screening Report
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            AI-assisted semiconductor component screening report.
          </p>
        </div>

        <div className="flex gap-3">

          <button
            onClick={() => navigate(-1)}
            className="rounded-xl border border-slate-700/50 bg-slate-900/50 px-4 py-2.5 text-xs text-slate-400 transition hover:bg-slate-800 hover:text-slate-200"
          >
            ← Back
          </button>

          <button
            onClick={handlePrint}
            className="rounded-xl border border-blue-400/20 bg-blue-500/10 px-5 py-2.5 text-xs font-medium text-blue-400 transition hover:bg-blue-500/20"
          >
            Print / Save PDF
          </button>

        </div>

      </div>

      {/* ================= REPORT META ================= */}

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <ReportMeta
          label="Analysis ID"
          value={analysis.id}
        />

        <ReportMeta
          label="Analysis Date"
          value={analysis.date}
        />

        <ReportMeta
          label="Component"
          value={component.id}
        />

        <ReportMeta
          label="Lot"
          value={component.lot}
        />

      </section>

      {/* ================= EXECUTIVE SUMMARY ================= */}

      <section className="mt-6 rounded-2xl border border-slate-700/30 bg-slate-900/40 p-6">

        <div className="flex flex-col justify-between gap-6 md:flex-row">

          <div>
            <p className="text-xs uppercase tracking-wider text-slate-600">
              Executive Summary
            </p>

            <h2 className="mt-2 text-xl font-semibold">
              {analysis.conclusion}
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
              The screening analysis indicates that the tested component
              remained within the expected operating range during the
              available checkpoints. Recorded parameters were reviewed
              across the screening timeline to determine overall component
              health and potential degradation behaviour.
            </p>
          </div>

          <div className="flex shrink-0 items-center">

            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-7 py-5 text-center">

              <p className="text-xs text-slate-600">
                Health Score
              </p>

              <p className="mt-1 text-4xl font-semibold text-emerald-400">
                {component.healthScore}%
              </p>

              <p className="mt-1 text-xs text-emerald-400">
                {component.status}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= RISK SUMMARY ================= */}

      <section className="mt-6">

        <h2 className="mb-4 text-lg font-semibold">
          Risk Assessment
        </h2>

        <div className="grid gap-4 md:grid-cols-3">

          <RiskCard
            title="Overall Risk"
            value={component.risk}
            description="Overall component screening risk."
            type="low"
          />

          <RiskCard
            title="Anomaly Status"
            value={analysis.anomalyStatus}
            description="Observed anomaly behaviour."
            type="normal"
          />

          <RiskCard
            title="Degradation"
            value={analysis.degradationStatus}
            description="Observed parameter drift."
            type="warning"
          />

        </div>

      </section>

      {/* ================= PARAMETERS ================= */}

      <section className="mt-8">

        <h2 className="mb-4 text-lg font-semibold">
          Component Parameters
        </h2>

        <div className="overflow-hidden rounded-2xl border border-slate-700/30">

          <table className="w-full text-left">

            <thead className="bg-slate-900/80">

              <tr>
                <th className="px-5 py-4 text-xs font-medium text-slate-500">
                  Parameter
                </th>

                <th className="px-5 py-4 text-xs font-medium text-slate-500">
                  Value
                </th>

                <th className="px-5 py-4 text-xs font-medium text-slate-500">
                  Unit
                </th>

                <th className="px-5 py-4 text-xs font-medium text-slate-500">
                  Status
                </th>
              </tr>

            </thead>

            <tbody>

              <ParameterRow
                name="Iddq / Leakage"
                value={parameters.iddq}
                unit="µA"
              />

              <ParameterRow
                name="Propagation Delay"
                value={parameters.delay}
                unit="ns"
              />

              <ParameterRow
                name="Supply Voltage"
                value={parameters.voltage}
                unit="V"
              />

            </tbody>

          </table>

        </div>

      </section>

      {/* ================= TIMELINE ================= */}

      <section className="mt-8">

        <h2 className="mb-4 text-lg font-semibold">
          Screening Timeline
        </h2>

        <div className="overflow-hidden rounded-2xl border border-slate-700/30">

          <table className="w-full text-left">

            <thead className="bg-slate-900/80">

              <tr>

                <th className="px-5 py-4 text-xs text-slate-500">
                  Checkpoint
                </th>

                <th className="px-5 py-4 text-xs text-slate-500">
                  Iddq
                </th>

                <th className="px-5 py-4 text-xs text-slate-500">
                  Delay
                </th>

                <th className="px-5 py-4 text-xs text-slate-500">
                  Voltage
                </th>

                <th className="px-5 py-4 text-xs text-slate-500">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {checkpoints.map((item) => (

                <tr
                  key={item.time}
                  className="border-t border-slate-800/50"
                >

                  <td className="px-5 py-4 text-sm text-slate-300">
                    {item.time}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-400">
                    {item.iddq} µA
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-400">
                    {item.delay} ns
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-400">
                    {item.voltage} V
                  </td>

                  <td className="px-5 py-4">

                    <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-400">
                      {item.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* ================= RECOMMENDATION ================= */}

      <section className="mt-8 rounded-2xl border border-blue-400/15 bg-blue-400/5 p-6">

        <p className="text-xs uppercase tracking-wider text-blue-400">
          Recommendation
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {analysis.recommendation}
        </p>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="mt-10 border-t border-slate-800/60 pt-6 text-center">

        <p className="text-xs text-slate-600">
          TRACE-X AI • Semiconductor Intelligence Platform
        </p>

        <p className="mt-1 text-[10px] text-slate-700">
          Generated from screening analysis {analysis.id}
        </p>

      </footer>

    </div>
  );
}


/* ============================= */
/* META */
/* ============================= */

function ReportMeta({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-700/30 bg-slate-900/40 p-4">

      <p className="text-[10px] uppercase tracking-wider text-slate-600">
        {label}
      </p>

      <p className="mt-2 text-sm font-medium text-slate-300">
        {value}
      </p>

    </div>
  );
}


/* ============================= */
/* RISK CARD */
/* ============================= */

function RiskCard({
  title,
  value,
  description,
  type,
}) {

  const styles = {
    low: "border-emerald-400/20 bg-emerald-400/5 text-emerald-400",
    normal: "border-blue-400/20 bg-blue-400/5 text-blue-400",
    warning: "border-yellow-400/20 bg-yellow-400/5 text-yellow-400",
  };

  return (
    <div
      className={`rounded-2xl border p-5 ${styles[type]}`}
    >

      <p className="text-xs opacity-70">
        {title}
      </p>

      <p className="mt-3 text-lg font-semibold">
        {value}
      </p>

      <p className="mt-2 text-xs text-slate-500">
        {description}
      </p>

    </div>
  );
}


/* ============================= */
/* PARAMETER ROW */
/* ============================= */

function ParameterRow({
  name,
  value,
  unit,
}) {
  return (
    <tr className="border-t border-slate-800/50">

      <td className="px-5 py-4 text-sm text-slate-300">
        {name}
      </td>

      <td className="px-5 py-4 text-sm text-slate-400">
        {value}
      </td>

      <td className="px-5 py-4 text-sm text-slate-600">
        {unit}
      </td>

      <td className="px-5 py-4">

        <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-400">
          Within Range
        </span>

      </td>

    </tr>
  );
}

export default Report;