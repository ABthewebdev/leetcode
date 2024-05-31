// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

function fib(n: number): number {
  // declaring the array with the first two numbers
  const dp = [0, 1];
  // for looping until index reaches number
  for (let i = 2; i <= n; i++) {
    // pushing the next number to the array by adding the previous number with i - 1 and the second previous number with i - 2
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
