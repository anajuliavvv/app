export const awaitFor = async (time: number) => {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(true), time);
  });
};
