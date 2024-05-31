// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5

function maxProfit(prices: number[]): number {
  const nums: number[] = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      nums.push(prices[j] - prices[i]);
    }
  }
  const num = nums.sort((a, b) => a - b)[nums.length - 1];
  if (num > 0) {
    return num;
  } else {
    return 0;
  }
}
