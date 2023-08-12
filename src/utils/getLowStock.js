export const getLowStock = (data) => {
  const lowStock = data.reduce(
    (acc, curr) => (curr.stock <= 10 ? (acc += 1) : acc),
    0
  );
  return lowStock;
};
