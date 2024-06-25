export interface ISale {
  name: string;
  value: number;
}

export const sales: Record<string, ISale> = {
  ["0T10:48:32"]: {
    name: "💳 Virtual",
    value: 500,
  },
  ["0T14:48:32"]: {
    name: "💳 Virtual",
    value: 850,
  },
  ["1T18:48:32"]: {
    name: "💳 Virtual",
    value: 850,
  },

  ["2T20:15:10"]: {
    name: "💳 Físico",
    value: 500,
  },
  ["2T20:16:10"]: {
    name: "💳 Físico",
    value: 1500,
  },
  ["3T19:50:32"]: {
    name: "💳 Físico",
    value: 500,
  },
};
