import { componentAnalysisData } from "./componentAnalysisData.js";
import { historyDetailsData } from "./historyDetailsData.js";
import { lotIntelligenceData } from "./lotIntelligenceData.js";
import { anomalyAnalysisData } from "./anomalyAnalysisData.js";
import { historyData } from "./historyData.js";
export const dummyDataA = {
    commandCenter: {
  stats: [
    {
      title: "Components Screened",
      value: "5,000",
      percentage: "+12.4%",
      type: "blue",
    },
    {
      title: "Normal Components",
      value: "4,120",
      percentage: "82.4%",
      type: "green",
    },
    {
      title: "Suspicious",
      value: "326",
      percentage: "6.5%",
      type: "yellow",
    },
    {
      title: "High Risk",
      value: "554",
      percentage: "11.1%",
      type: "red",
    },
  ],

  riskTrend: [
    { checkpoint: "0h", normal: 91, suspicious: 6, highRisk: 3 },
    { checkpoint: "24h", normal: 88, suspicious: 8, highRisk: 4 },
    { checkpoint: "48h", normal: 86, suspicious: 9, highRisk: 5 },
    { checkpoint: "72h", normal: 84, suspicious: 10, highRisk: 6 },
    { checkpoint: "96h", normal: 82, suspicious: 11, highRisk: 7 },
    { checkpoint: "120h", normal: 81, suspicious: 11, highRisk: 8 },
    { checkpoint: "168h", normal: 82, suspicious: 7, highRisk: 11 },
  ],

  healthOverview: {
    score: "82.4%",
    status: "Stable",

    data: [
      {
        label: "Normal",
        value: "4,120",
        percentage: "82.4%",
        type: "normal",
      },
      {
        label: "Suspicious",
        value: "326",
        percentage: "6.5%",
        type: "suspicious",
      },
      {
        label: "High Risk",
        value: "554",
        percentage: "11.1%",
        type: "risk",
      },
    ],
  },

  recentAnalyses: [
    {
      id: "TX-2026-0911",
      component: "CMP-1042",
      lot: "LOT-A17",
      health: "96%",
      status: "NORMAL",
      time: "2 min ago",
    },
    {
      id: "TX-2026-0910",
      component: "CMP-1038",
      lot: "LOT-A17",
      health: "74%",
      status: "REVIEW",
      time: "8 min ago",
    },
    {
      id: "TX-2026-0909",
      component: "CMP-0982",
      lot: "LOT-B04",
      health: "41%",
      status: "HIGH RISK",
      time: "14 min ago",
    },
    {
      id: "TX-2026-0908",
      component: "CMP-0964",
      lot: "LOT-C12",
      health: "91%",
      status: "NORMAL",
      time: "21 min ago",
    },
  ],

  latestActivity: {
    message: "126 components screened successfully.",
    time: "Processing completed 2 minutes ago.",
  },
},
  componentAnalysis: componentAnalysisData,
  historyDetails: historyDetailsData,
  anomalyAnalysis: anomalyAnalysisData,
  lotIntelligence: lotIntelligenceData,
  history: historyData,
};