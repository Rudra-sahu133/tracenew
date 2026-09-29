import { useEffect, useState } from "react";

import ComponentSearch from "../components/component/ComponentSearch.jsx";
import ComponentSummary from "../components/component/ComponentSummary.jsx";
import ComponentParameters from "../components/component/ComponentParameters.jsx";
import ComponentCheckpointTable from "../components/component/ComponentCheckpointTable.jsx";

import { getDemoData } from "../data/development/demoData.js";

function ComponentAnalysis() {
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
    component,
    parameters,
    checkpoints,
    analysis,
  } = data.componentAnalysis;

  const handleSearch = (componentId) => {
    console.log("Searching component:", componentId);
  };

  return (
    <div className="min-h-screen bg-[#020817]/60 px-5 py-7 text-slate-100 lg:px-8">

      {/* ================= HEADER ================= */}

      <section>

        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-blue-400">
          Component Intelligence
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Component Analysis
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-500">
          Inspect component health, screening parameters, checkpoint
          behaviour and degradation indicators.
        </p>

      </section>


      {/* ================= SEARCH ================= */}

      <section className="mt-7">

        <ComponentSearch
          onSearch={handleSearch}
        />

      </section>


      {/* ================= COMPONENT SUMMARY ================= */}

      <section className="mt-6">

        <ComponentSummary
          component={component}
        />

      </section>


      {/* ================= PARAMETERS ================= */}

      <section className="mt-6">

        <div className="mb-4">

          <h2 className="text-lg font-semibold">
            Current Parameters
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Latest recorded operating values.
          </p>

        </div>

        <ComponentParameters
          parameters={parameters}
        />

      </section>


      {/* ================= ANALYSIS SUMMARY ================= */}

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <AnalysisMetric
          label="Anomaly Score"
          value={analysis.anomalyScore}
          color="text-yellow-400"
        />

        <AnalysisMetric
          label="Degradation Score"
          value={analysis.degradationScore}
          color="text-purple-400"
        />

        <AnalysisMetric
          label="Screening Confidence"
          value={analysis.confidence}
          suffix="%"
          color="text-blue-400"
        />

        <AnalysisMetric
          label="Risk Level"
          value={component.risk}
          color={
            component.risk === "High"
              ? "text-red-400"
              : component.risk === "Medium"
                ? "text-yellow-400"
                : "text-emerald-400"
          }
        />

      </section>


      {/* ================= CONCLUSION ================= */}

      <section className="mt-6 rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-6">

        <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-400">
          Screening Conclusion
        </p>

        <h2 className="mt-3 text-xl font-semibold text-slate-200">
          {analysis.conclusion}
        </h2>

        <p className="mt-2 text-sm text-slate-500">

          Recommendation:{" "}

          <span className="text-slate-300">
            {analysis.recommendation}
          </span>

        </p>

      </section>


      {/* ================= CHECKPOINTS ================= */}

      <section className="mt-6">

        <ComponentCheckpointTable
          checkpoints={checkpoints}
        />

      </section>

    </div>
  );
}


/* ============================= */
/* ANALYSIS METRIC */
/* ============================= */

function AnalysisMetric({
  label,
  value,
  suffix = "",
  color,
}) {
  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">

      <p className="text-xs text-slate-500">
        {label}
      </p>

      <p className={`mt-3 text-2xl font-semibold ${color}`}>
        {value}
        {suffix}
      </p>

    </div>
  );
}

export default ComponentAnalysis;