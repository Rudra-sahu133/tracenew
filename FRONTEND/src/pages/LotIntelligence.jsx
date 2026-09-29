import { useEffect, useState } from "react";

import LotSummary from "../components/lot/LotSummary.jsx";
import LotHealthChart from "../components/lot/LotHealthChart.jsx";
import LotComponentTable from "../components/lot/LotComponentTable.jsx";

import { getDemoData } from "../data/development/demoData.js";

function LotIntelligence() {
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
    healthTrend,
    components,
  } = data.lotIntelligence;

  return (
    <div className="min-h-screen bg-[#020817]/60 px-5 py-7 text-slate-100 lg:px-8">

      {/* ================= HEADER ================= */}

      <section>

        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-purple-400">
          Lot Intelligence
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Lot Intelligence
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-500">
          Monitor lot-level component health, risk distribution and
          screening behaviour across the qualification timeline.
        </p>

      </section>


      {/* ================= SUMMARY ================= */}

      <section className="mt-7">

        <LotSummary
          summary={summary}
        />

      </section>


      {/* ================= HEALTH TREND ================= */}

      <section className="mt-6">

        <LotHealthChart
          data={healthTrend}
        />

      </section>


      {/* ================= COMPONENT TABLE ================= */}

      <section className="mt-6">

        <LotComponentTable
          components={components}
        />

      </section>

    </div>
  );
}

export default LotIntelligence;