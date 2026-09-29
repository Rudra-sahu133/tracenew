export const dashboardData = {
  stats: {
    totalComponents: 128,
    passed: 91,
    underReview: 26,
    highRisk: 11,
  },

  screeningTrend: [
    { time: "0h", normal: 112, review: 11, highRisk: 5 },
    { time: "24h", normal: 108, review: 14, highRisk: 6 },
    { time: "96h", normal: 101, review: 18, highRisk: 9 },
    { time: "168h", normal: 91, review: 26, highRisk: 11 },
  ],

  distribution: [
    { name: "Normal", value: 91 },
    { name: "Review", value: 26 },
    { name: "High Risk", value: 11 },
  ],

  recentScreenings: [
    {
      component: "C01-001",
      lot: "LOT-001",
      status: "PASS",
      risk: "Low",
      checkpoint: "168h",
    },
    {
      component: "C01-002",
      lot: "LOT-001",
      status: "REVIEW",
      risk: "Medium",
      checkpoint: "168h",
    },
    {
      component: "C01-003",
      lot: "LOT-001",
      status: "HIGH RISK",
      risk: "High",
      checkpoint: "168h",
    },
    {
      component: "C02-014",
      lot: "LOT-002",
      status: "PASS",
      risk: "Low",
      checkpoint: "96h",
    },
    {
      component: "C02-018",
      lot: "LOT-002",
      status: "REVIEW",
      risk: "Medium",
      checkpoint: "96h",
    },
  ],
};