import StatCard from "../components/dashboard/StatCard.jsx";
import RiskTrendChart from "../components/dashboard/RiskTrendChart.jsx";
import HealthOverview from "../components/dashboard/HealthOverview.jsx";
import RecentAnalyses from "../components/dashboard/RecentAnalyses.jsx";
import SystemOverview from "../components/dashboard/SystemOverview.jsx";
import FileUpload from "../components/common/FileUpload.jsx";
import { getDemoData } from "../data/development/demoData.js";
import { useEffect, useState } from "react";
function CommandCenter() {
  const [dataVersion, setDataVersion] = useState(0);

  useEffect(() => {
    const handleDataUpdate = () => {
      setDataVersion((value) => value + 1);
    };

    window.addEventListener("trace-x-data-updated", handleDataUpdate);

    return () => {
      window.removeEventListener("trace-x-data-updated", handleDataUpdate);
    };
  }, []);

  const data = getDemoData();
  const stats = getDemoData().commandCenter.stats;

  return (
    <div className="min-h-screen bg-transparent px-5 py-7 text-slate-100 lg:px-8">
      {/* ================= PAGE HEADER ================= */}

      <section className="mb-7">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-blue-400">
              Semiconductor Intelligence
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              Command Center
            </h1>

            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Real-time overview of component screening, anomaly detection,
              degradation behaviour and lot-level risk.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              className="rounded-xl border border-slate-700/50
              bg-slate-900/60 px-4 py-2.5 text-xs
              text-slate-400 transition
              hover:border-slate-600
              hover:text-slate-200"
            >
              Export Data
            </button>

            <button
              className="rounded-xl border border-blue-400/20
              bg-blue-500/10 px-4 py-2.5 text-xs
              font-medium text-blue-400 transition
              hover:bg-blue-500/20"
            >
              + New Analysis
            </button>
          </div>
        </div>
      </section>
      <section className="mb-6">
        <FileUpload />
      </section>

      {/* ================= STAT CARDS ================= */}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            percentage={item.percentage}
            type={item.type}
          />
        ))}
      </section>

      {/* ================= ANALYTICS ================= */}

      <section className="mt-6 grid gap-5 xl:grid-cols-[1.6fr_1fr]">
        {/* Risk Trend */}

        <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-200">
                Risk Trend
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Screening risk distribution across recent checkpoints.
              </p>
            </div>

            <span
              className="rounded-lg border border-slate-700/50
              bg-slate-950/40 px-3 py-1.5 text-[10px] text-slate-500"
            >
              Last 7 checkpoints
            </span>
          </div>

          <RiskTrendChart />
        </div>

        {/* Health Overview */}

        <HealthOverview />
      </section>

      {/* ================= RECENT + SYSTEM ================= */}

      <section className="mt-6 grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <RecentAnalyses />

        <SystemOverview />
      </section>

      {/* ================= FOOTER INFO ================= */}

      <section
        className="mt-6 rounded-2xl border border-slate-800/60
        bg-slate-900/30 px-5 py-4"
      >
        <div className="flex flex-col justify-between gap-2 text-xs sm:flex-row">
          <p className="text-slate-600">TRACE-X AI Screening Platform</p>

          <p className="text-slate-700">
            Last system synchronization: 2 minutes ago
          </p>
        </div>
      </section>
    </div>
  );
}

export default CommandCenter;
