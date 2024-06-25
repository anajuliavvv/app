export interface IPriceTable {
  virtual: Record<number, number>;
}

export const priceTable: IPriceTable = {
  virtual: {
    500: 65,
    850: 100,
    1500: 150,
  },
};
