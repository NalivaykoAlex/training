//1480. Running Sum of 1d Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = function(nums) {
    const result = [nums[0]];

    nums.reduce((previousValue, currentValue) => {
        const sum = previousValue + currentValue

        result.push(sum);

        return sum;
    })

    return result
};

// console.log(runningSum([1,2,3,4])) // [1,3,6,10]
// console.log(runningSum([1,1,1,1,1])) // [1,2,3,4,5]
// console.log(runningSum([3,1,2,10,1])) // [3,4,6,16,17]

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// ============

// 1108. Defanging an IP Address

/**
 * @param {string} address
 * @return {string}
 */

const defangIPaddr = function(address) {
    // return address.replaceAll(".", "[.]");
    return address.split('.').join("[.]");
};

// console.log(defangIPaddr( "1.1.1.1"));


// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"


// 1672. Richest Customer Wealth


/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
    let min = 0;

    for (let i = 0; i < accounts.length; i++) {
        const current = accounts[i];

        const sum = current.reduce(( a, b ) => {
            return a + b
        });

        if (min < sum) {
            min = sum
        }
    }

    return min;
};

// console.log(maximumWealth([[1,5],[7,3],[3,5]]));

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation:
//     1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.

// 1431. Kids With the Greatest Number of Candies

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

};

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]



/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j] && i < j) {
                num ++;
            }
        }
    }

    return num;

};

// console.log(numIdenticalPairs([1,1,1,1]));


/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    // let min = 0;

    // stones.split("").forEach((a) => {
    //     if (jewels.includes(a)) {
    //         min++
    //     }
    // })

    return stones.split("").reduce((acc, item) => {
        if (jewels.includes(item)) {
            acc++
        }

        return acc
    }, 0)

    // return min;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
