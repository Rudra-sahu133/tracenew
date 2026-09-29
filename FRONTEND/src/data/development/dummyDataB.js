export const dummyDataB = {
    commandCenter: {
  stats: [
    {
      title: "Components Screened",
      value: "4,800",
      percentage: "+8.7%",
      type: "blue",
    },
    {
      title: "Normal Components",
      value: "4,021",
      percentage: "83.8%",
      type: "green",
    },
    {
      title: "Suspicious",
      value: "487",
      percentage: "10.1%",
      type: "yellow",
    },
    {
      title: "High Risk",
      value: "292",
      percentage: "6.1%",
      type: "red",
    },
  ],

  riskTrend: [
    { checkpoint: "0h", normal: 94, suspicious: 4, highRisk: 2 },
    { checkpoint: "24h", normal: 91, suspicious: 6, highRisk: 3 },
    { checkpoint: "48h", normal: 88, suspicious: 8, highRisk: 4 },
    { checkpoint: "72h", normal: 86, suspicious: 9, highRisk: 5 },
    { checkpoint: "96h", normal: 84, suspicious: 10, highRisk: 6 },
    { checkpoint: "120h", normal: 82, suspicious: 11, highRisk: 7 },
    { checkpoint: "168h", normal: 84, suspicious: 10, highRisk: 6 },
  ],

  healthOverview: {
    score: "83.8%",
    status: "Monitoring",

    data: [
      {
        label: "Normal",
        value: "4,021",
        percentage: "83.8%",
        type: "normal",
      },
      {
        label: "Suspicious",
        value: "487",
        percentage: "10.1%",
        type: "suspicious",
      },
      {
        label: "High Risk",
        value: "292",
        percentage: "6.1%",
        type: "risk",
      },
    ],
  },

  recentAnalyses: [
    {
      id: "TX-2026-0929",
      component: "CMP-2048",
      lot: "LOT-B17",
      health: "78%",
      status: "REVIEW",
      time: "Just now",
    },
    {
      id: "TX-2026-0928",
      component: "CMP-2039",
      lot: "LOT-B17",
      health: "84%",
      status: "NORMAL",
      time: "3 min ago",
    },
    {
      id: "TX-2026-0927",
      component: "CMP-2016",
      lot: "LOT-C08",
      health: "62%",
      status: "REVIEW",
      time: "7 min ago",
    },
    {
      id: "TX-2026-0926",
      component: "CMP-1987",
      lot: "LOT-A21",
      health: "48%",
      status: "HIGH RISK",
      time: "12 min ago",
    },
  ],

  latestActivity: {
    message: "342 components analyzed from uploaded dataset.",
    time: "Screening analysis completed just now.",
  },
},
  componentAnalysis: {
    component: {
      id: "CMP-2048",
      lot: "LOT-B17",
      status: "REVIEW",
      risk: "Medium",
      healthScore: 78,
    },

    parameters: {
      iddq: 18.7,
      delay: 5.24,
      voltage: 1.17,
    },

    analysis: {
      anomalyScore: 0.68,
      degradationScore: 0.54,
      confidence: 94,
      conclusion: "Potential degradation detected",
      recommendation:
        "Review component behaviour and monitor further screening checkpoints.",
    },

    checkpoints: [
      {
        time: "0h",
        iddq: 11.8,
        delay: 4.31,
        voltage: 1.20,
        status: "PASS",
      },
      {
        time: "24h",
        iddq: 13.2,
        delay: 4.46,
        voltage: 1.19,
        status: "PASS",
      },
      {
        time: "48h",
        iddq: 15.1,
        delay: 4.72,
        voltage: 1.18,
        status: "REVIEW",
      },
      {
        time: "96h",
        iddq: 17.3,
        delay: 5.01,
        voltage: 1.17,
        status: "REVIEW",
      },
      {
        time: "168h",
        iddq: 18.7,
        delay: 5.24,
        voltage: 1.17,
        status: "REVIEW",
      },
    ],
  },

  historyDetails: {
    analysis: {
      id: "ANL-B2048",
      date: "2026-09-29",
      conclusion: "Potential degradation detected",
      healthStatus: "Moderate",
      anomalyStatus: "Elevated",
      degradationStatus: "Detected",
      recommendation:
        "Continue monitoring and perform additional reliability screening.",
    },

    component: {
      id: "CMP-2048",
      lot: "LOT-B17",
      status: "REVIEW",
      risk: "Medium",
      healthScore: 78,
      anomalyScore: 0.68,
      latestCheckpoint: "168h",
    },

    parameters: {
      iddq: 18.7,
      delay: 5.24,
      voltage: 1.17,
    },

    checkpoints: [
      {
        time: "0h",
        iddq: 11.8,
        delay: 4.31,
        voltage: 1.20,
        status: "PASS",
      },
      {
        time: "24h",
        iddq: 13.2,
        delay: 4.46,
        voltage: 1.19,
        status: "PASS",
      },
      {
        time: "48h",
        iddq: 15.1,
        delay: 4.72,
        voltage: 1.18,
        status: "REVIEW",
      },
      {
        time: "96h",
        iddq: 17.3,
        delay: 5.01,
        voltage: 1.17,
        status: "REVIEW",
      },
      {
        time: "168h",
        iddq: 18.7,
        delay: 5.24,
        voltage: 1.17,
        status: "REVIEW",
      },
    ],
  },
  anomalyAnalysis: {
  summary: {
    totalScreened: 342,
    normal: 286,
    suspicious: 38,
    highRisk: 18,
    anomalyRate: 16.4,
  },

  distribution: [
    {
      name: "Normal",
      value: 286,
    },
    {
      name: "Suspicious",
      value: 38,
    },
    {
      name: "High Risk",
      value: 18,
    },
  ],

  isolationData: [
    {
      component: "CMP-2048",
      score: 0.09,
      health: 96,
      status: "Normal",
    },
    {
      component: "CMP-2039",
      score: 0.14,
      health: 93,
      status: "Normal",
    },
    {
      component: "CMP-2016",
      score: 0.22,
      health: 88,
      status: "Normal",
    },
    {
      component: "CMP-1987",
      score: 0.34,
      health: 78,
      status: "Suspicious",
    },
    {
      component: "CMP-1974",
      score: 0.41,
      health: 75,
      status: "Suspicious",
    },
    {
      component: "CMP-1962",
      score: 0.49,
      health: 71,
      status: "Suspicious",
    },
    {
      component: "CMP-1948",
      score: 0.63,
      health: 64,
      status: "High Risk",
    },
    {
      component: "CMP-1935",
      score: 0.71,
      health: 59,
      status: "High Risk",
    },
    {
      component: "CMP-1921",
      score: 0.84,
      health: 51,
      status: "High Risk",
    },
  ],

  suspiciousComponents: [
    {
      id: "CMP-1987",
      anomalyScore: 0.34,
      health: 78,
      risk: "Medium",
      reason: "Parameter drift detected",
    },
    {
      id: "CMP-1974",
      anomalyScore: 0.41,
      health: 75,
      risk: "Medium",
      reason: "Elevated leakage behaviour",
    },
    {
      id: "CMP-1962",
      anomalyScore: 0.49,
      health: 71,
      risk: "Medium",
      reason: "Propagation delay deviation",
    },
    {
      id: "CMP-1948",
      anomalyScore: 0.63,
      health: 64,
      risk: "High",
      reason: "Multiple parameter deviations",
    },
    {
      id: "CMP-1935",
      anomalyScore: 0.71,
      health: 59,
      risk: "High",
      reason: "Elevated degradation signal",
    },
    {
      id: "CMP-1921",
      anomalyScore: 0.84,
      health: 51,
      risk: "High",
      reason: "Strong degradation signal",
    },
  ],

  checkpointTrend: [
    {
      checkpoint: "0h",
      anomalies: 5,
    },
    {
      checkpoint: "24h",
      anomalies: 9,
    },
    {
      checkpoint: "48h",
      anomalies: 13,
    },
    {
      checkpoint: "72h",
      anomalies: 17,
    },
    {
      checkpoint: "96h",
      anomalies: 22,
    },
    {
      checkpoint: "120h",
      anomalies: 28,
    },
    {
      checkpoint: "168h",
      anomalies: 38,
    },
  ],
},
lotIntelligence: {
  summary: {
    totalComponents: 342,
    normal: 286,
    suspicious: 38,
    highRisk: 18,
    averageHealth: 88.7,
  },

  healthTrend: [
    {
      time: "0h",
      health: 97,
    },
    {
      time: "24h",
      health: 96,
    },
    {
      time: "48h",
      health: 94,
    },
    {
      time: "72h",
      health: 92,
    },
    {
      time: "96h",
      health: 90,
    },
    {
      time: "120h",
      health: 89,
    },
    {
      time: "168h",
      health: 88,
    },
  ],

  components: [
    {
      id: "CMP-2048",
      health: 96,
      anomalyScore: 0.09,
      risk: "Low",
      status: "PASS",
    },
    {
      id: "CMP-2039",
      health: 93,
      anomalyScore: 0.14,
      risk: "Low",
      status: "PASS",
    },
    {
      id: "CMP-2016",
      health: 88,
      anomalyScore: 0.22,
      risk: "Low",
      status: "PASS",
    },
    {
      id: "CMP-1987",
      health: 78,
      anomalyScore: 0.34,
      risk: "Medium",
      status: "REVIEW",
    },
    {
      id: "CMP-1974",
      health: 75,
      anomalyScore: 0.41,
      risk: "Medium",
      status: "REVIEW",
    },
    {
      id: "CMP-1962",
      health: 71,
      anomalyScore: 0.49,
      risk: "Medium",
      status: "REVIEW",
    },
    {
      id: "CMP-1948",
      health: 64,
      anomalyScore: 0.63,
      risk: "High",
      status: "REVIEW",
    },
    {
      id: "CMP-1935",
      health: 59,
      anomalyScore: 0.71,
      risk: "High",
      status: "REVIEW",
    },
  ],
},
history: {
  summary: {
    totalAnalyses: 8,
    passed: 2,
    review: 6,
    highRisk: 3,
  },

  records: [
    {
      id: "ANL-B2026-001",
      component: "CMP-2048",
      lot: "LOT-B17",
      date: "29 Sep 2026",
      health: 78,
      risk: "Medium",
      status: "REVIEW",
    },
    {
      id: "ANL-B2026-002",
      component: "CMP-2039",
      lot: "LOT-B17",
      date: "29 Sep 2026",
      health: 84,
      risk: "Low",
      status: "PASS",
    },
    {
      id: "ANL-B2026-003",
      component: "CMP-2016",
      lot: "LOT-C08",
      date: "29 Sep 2026",
      health: 62,
      risk: "Medium",
      status: "REVIEW",
    },
    {
      id: "ANL-B2026-004",
      component: "CMP-1987",
      lot: "LOT-A21",
      date: "29 Sep 2026",
      health: 48,
      risk: "High",
      status: "REVIEW",
    },
    {
      id: "ANL-B2026-005",
      component: "CMP-1974",
      lot: "LOT-B17",
      date: "28 Sep 2026",
      health: 75,
      risk: "Medium",
      status: "REVIEW",
    },
    {
      id: "ANL-B2026-006",
      component: "CMP-1962",
      lot: "LOT-C08",
      date: "28 Sep 2026",
      health: 71,
      risk: "Medium",
      status: "REVIEW",
    },
    {
      id: "ANL-B2026-007",
      component: "CMP-1948",
      lot: "LOT-A21",
      date: "27 Sep 2026",
      health: 64,
      risk: "High",
      status: "REVIEW",
    },
    {
      id: "ANL-B2026-008",
      component: "CMP-1935",
      lot: "LOT-B17",
      date: "27 Sep 2026",
      health: 59,
      risk: "High",
      status: "REVIEW",
    },
  ],
},
};