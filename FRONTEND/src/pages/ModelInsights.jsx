import ReportSummary from "../components/reports/ReportSummary.jsx";
import ReportsTable from "../components/reports/ReportsTable.jsx";

import { reportsData } from "../data/development/reportsData.js";

function Reports() {
  return (
    <div className="min-h-screen bg-[#020817]/60 px-5 py-7 text-slate-100 lg:px-8">

      {/* ================= HEADER ================= */}

      <section>

        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-blue-400">
          Report Center
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Screening Reports
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-500">
          Access generated screening reports, component health
          assessments and historical analysis results.
        </p>

      </section>


      {/* ================= SUMMARY ================= */}

      <section className="mt-7">

        <ReportSummary
          reports={reportsData}
        />

      </section>


      {/* ================= REPORT TABLE ================= */}

      <section className="mt-6">

        <ReportsTable
          reports={reportsData}
        />

      </section>


      {/* ================= INFORMATION ================= */}

      <section className="mt-6 rounded-2xl border border-blue-400/15 bg-blue-400/5 p-6">

        <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400">
          Report Generation
        </p>

        <h2 className="mt-2 text-lg font-semibold text-slate-200">
          Reports are generated from screening analysis data
        </h2>

        <p className="mt-2 max-w-3xl text-xs leading-5 text-slate-500">
          Each report contains component information, recorded
          parameters, checkpoint behaviour, risk assessment,
          screening conclusion and recommendations.
        </p>

      </section>

    </div>
  );
}

export default Reports;