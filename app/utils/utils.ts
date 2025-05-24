// export const formatCurrency = (amount: number | any) => {
//   if (isNaN(amount) || amount == null) {
//     amount = 0;
//   }

//   const roundedAmount = Math.ceil(amount * 100) / 100;
//   return roundedAmount.toLocaleString("en-US", {
//     minimumFractionDigits: 3,
//     maximumFractionDigits: 4,
//   });
// };

export const formatCurrency = (amount: number | any) => {
  if (isNaN(amount) || amount == null) {
    amount = 0;
  }

  const roundedAmount = Math.ceil(amount * 100) / 100;
  return roundedAmount.toLocaleString("en-US", {
    minimumFractionDigits: 0, // Removes unnecessary .00
    maximumFractionDigits: 4, // Keeps up to 4 decimal places if needed
  });
};
