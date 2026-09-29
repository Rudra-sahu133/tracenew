import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/layout/Header.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import BackgroundVideo from "./components/common/BackgroundVideo.jsx";
import CommandCenter from "./pages/CommandCenter.jsx";
import LotIntelligence from "./pages/LotIntelligence.jsx";
import ComponentAnalysis from "./pages/ComponentAnalysis.jsx";
import AnomalyAnalysis from "./pages/AnomalyAnalysis.jsx";
import History from "./pages/History.jsx";
import HistoryDetails from "./pages/HistoryDetails.jsx";
import ModelInsights from "./pages/ModelInsights.jsx";
import Reports from "./pages/Reports.jsx";
import Settings from "./pages/Settings.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen text-slate-100">
        <BackgroundVideo />
        {/* ================= SIDEBAR ================= */}

        <Sidebar />

        {/* ================= MAIN AREA ================= */}

        <div className="min-h-screen lg:ml-[250px]">
          <Header />

          <main>
            <Routes>
              {/* ================= COMMAND CENTER ================= */}

              <Route path="/" element={<CommandCenter />} />

              {/* ================= LOT INTELLIGENCE ================= */}

              <Route path="/lot-intelligence" element={<LotIntelligence />} />

              {/* ================= COMPONENT ANALYSIS ================= */}

              <Route
                path="/component-analysis"
                element={<ComponentAnalysis />}
              />

              {/* ================= ANOMALY ANALYSIS ================= */}

              <Route path="/anomaly-analysis" element={<AnomalyAnalysis />} />

              {/* ================= HISTORY ================= */}

              <Route path="/history" element={<History />} />

              <Route path="/history/:id" element={<HistoryDetails />} />

              {/* ================= MODEL INSIGHTS ================= */}

              <Route path="/model-insights" element={<ModelInsights />} />

              {/* ================= REPORTS LIST ================= */}

              <Route path="/reports" element={<Reports />} />

              {/* ================= INDIVIDUAL REPORT ================= */}

              <Route path="/report/:id" element={<Reports />} />

              {/* ================= FALLBACK ================= */}

              <Route path="*" element={<Navigate to="/" replace />} />

              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
