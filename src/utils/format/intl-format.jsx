export const currencyFormat = (params) => {
  return new Intl.NumberFormat("us-EN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(params);
};
