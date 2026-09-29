export const anomalyAnalysisData = {
  summary: {
    totalScreened: 248,
    normal: 211,
    suspicious: 24,
    highRisk: 13,
    anomalyRate: 14.9,
  },

  distribution: [
    {
      name: "Normal",
      value: 211,
    },
    {
      name: "Suspicious",
      value: 24,
    },
    {
      name: "High Risk",
      value: 13,
    },
  ],

  isolationData: [
    {
      component: "CMP-1001",
      score: 0.08,
      health: 97,
      status: "Normal",
    },
    {
      component: "CMP-1008",
      score: 0.12,
      health: 95,
      status: "Normal",
    },
    {
      component: "CMP-1021",
      score: 0.18,
      health: 92,
      status: "Normal",
    },
    {
      component: "CMP-1034",
      score: 0.27,
      health: 88,
      status: "Suspicious",
    },
    {
      component: "CMP-1044",
      score: 0.31,
      health: 82,
      status: "Suspicious",
    },
    {
      component: "CMP-1057",
      score: 0.44,
      health: 79,
      status: "Suspicious",
    },
    {
      component: "CMP-1078",
      score: 0.61,
      health: 74,
      status: "High Risk",
    },
    {
      component: "CMP-1085",
      score: 0.72,
      health: 68,
      status: "High Risk",
    },
    {
      component: "CMP-1092",
      score: 0.81,
      health: 63,
      status: "High Risk",
    },
  ],

  suspiciousComponents: [
    {
      id: "CMP-1044",
      anomalyScore: 0.31,
      health: 82,
      risk: "Medium",
      reason: "Parameter drift detected",
    },
    {
      id: "CMP-1057",
      anomalyScore: 0.44,
      health: 79,
      risk: "Medium",
      reason: "Elevated leakage behaviour",
    },
    {
      id: "CMP-1078",
      anomalyScore: 0.61,
      health: 74,
      risk: "High",
      reason: "Propagation delay deviation",
    },
    {
      id: "CMP-1085",
      anomalyScore: 0.72,
      health: 68,
      risk: "High",
      reason: "Multiple parameter deviations",
    },
    {
      id: "CMP-1092",
      anomalyScore: 0.81,
      health: 63,
      risk: "High",
      reason: "Strong degradation signal",
    },
  ],

  checkpointTrend: [
    {
      checkpoint: "0h",
      anomalies: 4,
    },
    {
      checkpoint: "24h",
      anomalies: 7,
    },
    {
      checkpoint: "48h",
      anomalies: 9,
    },
    {
      checkpoint: "72h",
      anomalies: 12,
    },
    {
      checkpoint: "96h",
      anomalies: 16,
    },
    {
      checkpoint: "168h",
      anomalies: 24,
    },
  ],
};