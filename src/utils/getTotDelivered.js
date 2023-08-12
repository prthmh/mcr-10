export const getTotDelivered = (data) => {
  const totDelivered = data.reduce((acc, curr) => acc + curr.delivered, 0);
  return totDelivered;
};
