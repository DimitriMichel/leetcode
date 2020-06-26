const maxProfit = (prices) => {
  let maxProfit = 0;
  let cheapestPrice = prices[0];

  for (let price of prices) {
    let currentPrice = prices[price];
    if (cheapestPrice > currentPrice) {
      cheapestPrice = currentPrice;
    }
    let currentProfit = currentPrice - cheapestPrice;
    maxProfit = Math.max(currentProfit, maxProfit);
  }
  return maxProfit;
};
