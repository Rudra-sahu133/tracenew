export const historyDetailsData = {
  analysis: {
    id: "ANL-001",
    date: "28 Sep 2026",

    conclusion: "Component is healthy",

    healthStatus: "Within expected operating range",

    anomalyStatus: "Low anomaly activity detected",

    degradationStatus: "Minor drift observed",

    recommendation:
      "Continue monitoring during future screening checkpoints.",
  },

  component: {
    id: "CMP-10428",
    lot: "LOT-2026-A17",

    healthScore: 94,

    anomalyScore: 0.18,

    latestCheckpoint: "168h",

    status: "PASS",

    risk: "Low",
  },

  parameters: {
    iddq: 4.21,
    delay: 2.84,
    voltage: 1.21,
  },

  checkpoints: [
    {
      time: "0h",
      iddq: 3.92,
      delay: 2.61,
      voltage: 1.20,
      status: "PASS",
    },

    {
      time: "24h",
      iddq: 4.01,
      delay: 2.66,
      voltage: 1.20,
      status: "PASS",
    },

    {
      time: "96h",
      iddq: 4.10,
      delay: 2.73,
      voltage: 1.21,
      status: "PASS",
    },

    {
      time: "168h",
      iddq: 4.21,
      delay: 2.84,
      voltage: 1.21,
      status: "PASS",
    },
  ],
};