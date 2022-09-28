// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0]
    let maxPrice = 0

    for (let i = 1; i < prices.length; i++){
        const price = prices[i];

        if (minPrice > price) {
            minPrice = price
        }

        if (price - minPrice > maxPrice) {
            maxPrice = price - minPrice
        }
    }

    return maxPrice
};


console.log(maxProfit([7,1,5,3,6,4]), 5)
console.log(maxProfit([7,6,4,3,1]), 0)
console.log(maxProfit([2,1,2,1,0,1,2]), 2)
console.log(maxProfit([2,4,1]), 2)

