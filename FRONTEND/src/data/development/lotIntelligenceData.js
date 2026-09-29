export const lotIntelligenceData = {
  summary: {
    totalComponents: 248,
    normal: 211,
    suspicious: 24,
    highRisk: 13,
    averageHealth: 91.4,
  },

  healthTrend: [
    { time: "0h", health: 98 },
    { time: "24h", health: 97 },
    { time: "48h", health: 95 },
    { time: "72h", health: 94 },
    { time: "96h", health: 93 },
    { time: "120h", health: 92 },
    { time: "168h", health: 91 },
  ],

  components: [
    {
      id: "CMP-1042",
      health: 97,
      anomalyScore: 0.08,
      risk: "Low",
      status: "PASS",
    },
    {
      id: "CMP-1044",
      health: 82,
      anomalyScore: 0.31,
      risk: "Medium",
      status: "REVIEW",
    },
    {
      id: "CMP-1045",
      health: 68,
      anomalyScore: 0.72,
      risk: "High",
      status: "REVIEW",
    },
    {
      id: "CMP-1078",
      health: 74,
      anomalyScore: 0.61,
      risk: "High",
      status: "REVIEW",
    },
    {
      id: "CMP-1091",
      health: 94,
      anomalyScore: 0.12,
      risk: "Low",
      status: "PASS",
    },
    {
      id: "CMP-1112",
      health: 89,
      anomalyScore: 0.19,
      risk: "Low",
      status: "PASS",
    },
  ],
};