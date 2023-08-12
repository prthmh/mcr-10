export const getTotStock = (data) => {
  const totStock = data.reduce((acc, curr) => acc + curr.stock, 0);
  return totStock;
};
