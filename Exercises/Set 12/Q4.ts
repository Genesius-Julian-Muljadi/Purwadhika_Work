// Q: You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. 
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// We will assume array is not empty and all input array elements are positive

function stonks(arr: Array<number>): number {
    let sofarmax: number = 0;
    let currnum: number = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < currnum) {
            currnum = arr[i];
            continue;
        };

        if (arr[i] - currnum > sofarmax) {
            sofarmax = arr[i] - currnum;
        };
    };

    return sofarmax;
};

console.log(stonks([99]));
console.log(stonks([7,1,5,3,6,4]));  // 5
console.log(stonks([7,6,4,3,1]));  // 0
console.log(stonks([5, 15, 7, 4, 8, 16, 1, 11, 12]));  // 12