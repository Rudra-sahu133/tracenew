export const modelInsightsData = {
  overview: {
    status: "Operational",
    version: "TRACE-X v1.0",
    lastUpdated: "28 Sep 2026",
    dataset: "ESS Screening Dataset",
  },

  metrics: {
    f1Score: 0.96,
    precision: 0.95,
    recall: 0.97,
    falseNegativeRate: 0.42,
    mae: 0.0479,
    explainability: 0.92,
  },

  performanceTrend: [
    {
      checkpoint: "0h",
      precision: 0.94,
      recall: 0.95,
      f1: 0.945,
    },
    {
      checkpoint: "24h",
      precision: 0.95,
      recall: 0.96,
      f1: 0.955,
    },
    {
      checkpoint: "48h",
      precision: 0.95,
      recall: 0.96,
      f1: 0.955,
    },
    {
      checkpoint: "72h",
      precision: 0.96,
      recall: 0.97,
      f1: 0.965,
    },
    {
      checkpoint: "96h",
      precision: 0.96,
      recall: 0.97,
      f1: 0.965,
    },
    {
      checkpoint: "168h",
      precision: 0.95,
      recall: 0.97,
      f1: 0.96,
    },
  ],

  features: [
    "Iddq / Leakage",
    "Propagation Delay",
    "Supply Voltage",
    "Checkpoint Behaviour",
    "Parameter Drift",
  ],

  activity: [
    {
      event: "Anomaly screening completed",
      time: "Today, 14:32",
      status: "Completed",
    },
    {
      event: "Model performance validated",
      time: "Today, 12:18",
      status: "Completed",
    },
    {
      event: "Screening dataset processed",
      time: "Yesterday, 18:42",
      status: "Completed",
    },
    {
      event: "Model configuration updated",
      time: "27 Sep 2026",
      status: "Updated",
    },
  ],
};