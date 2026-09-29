import { useMemo, useState } from "react";

import HistoryStats from "../components/history/HistoryStats.jsx";
import HistoryFilters from "../components/history/HistoryFilters.jsx";
import HistoryTable from "../components/history/HistoryTable.jsx";

import { historyData } from "../data/development/historyData.js";

function History() {
  const [search, setSearch] = useState("");
  const [risk, setRisk] = useState("All");

  const filteredData = useMemo(() => {
    return historyData.filter((item) => {

      const query = search.toLowerCase();

      const matchesSearch =
        item.id.toLowerCase().includes(query) ||
        item.component.toLowerCase().includes(query) ||
        item.lot.toLowerCase().includes(query);

      const matchesRisk =
        risk === "All" ||
        item.risk === risk;

      return matchesSearch && matchesRisk;
    });
  }, [search, risk]);

  return (
    <div className="min-h-screen bg-[#020817]/60 px-5 py-7 text-slate-100 lg:px-8">

      {/* HEADER */}

      <section>

        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-blue-400">
          Analysis Records
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Analysis History
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-500">
          Review previous screening analyses, component health and
          historical risk assessments.
        </p>

      </section>


      {/* STATS */}

      <section className="mt-7">

        <HistoryStats
          data={historyData}
        />

      </section>


      {/* FILTERS */}

      <section className="mt-6">

        <HistoryFilters
          search={search}
          setSearch={setSearch}
          risk={risk}
          setRisk={setRisk}
        />

      </section>


      {/* TABLE */}

      <section className="mt-5">

        <HistoryTable
          data={filteredData}
        />

      </section>

    </div>
  );
}

export default History;