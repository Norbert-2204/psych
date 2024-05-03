export function convertMoney(priceGrosz) {
  return (priceGrosz / 100).toFixed(2);
}
