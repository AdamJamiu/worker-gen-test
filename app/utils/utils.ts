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

export function formatNumberShort(value: string): string {
  const num = parseFloat(value);
  if (isNaN(num)) return value;

  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num.toString();
}
