/*
  Вам дан целочисленный массив prices, где prices[i] цена данной акции в день.
  Каждый день вы можете решить купить и/или продать акции.
  В любой момент времени вы можете владеть не более чем одной акцией.
  Однако вы можете купить его и тут же продать в тот же день.

  Найдите и верните максимальную прибыль, которую вы можете получить.

  Input: prices = [7,1,5,3,6,4]
  Output: 7

  Input: prices = [7,6,4,3,1]
  Output: 0
*/

const maxProfit = (prices = []) => {
  let profit = 0;
  let buyingPrice = prices[0];

  for (const price of prices) {
    if (price > buyingPrice) {
      profit += price - buyingPrice;
    }

    buyingPrice = price;
  }

  return profit;
};

export default maxProfit;
