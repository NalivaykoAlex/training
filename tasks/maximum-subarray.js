/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) { // Time O(n^2)  space - O(1)
//     if (!nums.length) {
//         return 0
//     }
//
//     if (nums.length === 1) {
//         return nums[0]
//     }
//
//     let maxSum = -Infinity;
//     let currSum;
//
//     for (let i = 0; i < nums.length; i++) {
//         currSum = 0;
//
//         for (let j = i; j < nums.length; j++) {
//             currSum += nums[j];
//
//             if (maxSum < currSum) {
//                 maxSum = currSum;
//             }
//         }
//     }
//
//     return maxSum
// };

function maxSubArray(nums) { // Time O(n)  space - O(1)
    let currSum = -Infinity;
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        currSum = Math.max(0, currSum);
        currSum += nums[i];
        maxSum = Math.max(maxSum, currSum);

        console.log(currSum, 'currSum')
        console.log(maxSum, 'maxSum')
    }
    return maxSum;
}

var maxSubArray = function(nums) {
    var prev = 0;
    var max = -Infinity;

    for (var i = 0; i < nums.length; i++) {
        // Compare previous contiguous sum with current number
        prev = Math.max(prev + nums[i], nums[i]);
        // Check if the current prev is the greatest sum
        max = Math.max(max, prev);
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6) //
// console.log(maxSubArray([1]), 1)
// console.log(maxSubArray([-4, -5, -6, 20, 30]), 50)
// console.log(maxSubArray([5,4,-1,7,8]), 23)
// console.log(maxSubArray([]), 0)