export const componentAnalysisData = {
  component: {
    id: "CMP-1042",
    lot: "LOT-A17",
    type: "Logic IC",
    manufacturer: "TRACE Semiconductor",
    status: "NORMAL",
    risk: "Low",
    healthScore: 96,
  },

  parameters: {
    iddq: 4.21,
    delay: 2.84,
    voltage: 1.21,
    temperature: 27.4,
  },

  checkpoints: [
    {
      time: "0h",
      iddq: 4.02,
      delay: 2.61,
      voltage: 1.20,
      temperature: 26.8,
      status: "PASS",
    },
    {
      time: "24h",
      iddq: 4.08,
      delay: 2.67,
      voltage: 1.20,
      temperature: 27.1,
      status: "PASS",
    },
    {
      time: "96h",
      iddq: 4.15,
      delay: 2.75,
      voltage: 1.21,
      temperature: 27.3,
      status: "PASS",
    },
    {
      time: "168h",
      iddq: 4.21,
      delay: 2.84,
      voltage: 1.21,
      temperature: 27.4,
      status: "PASS",
    },
  ],

  analysis: {
    anomalyScore: 0.08,
    degradationScore: 0.12,
    confidence: 96.4,
    conclusion: "Component operating within expected range.",
    recommendation: "Continue normal monitoring.",
  },
};