// Example 1:
//
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:
//
// Input: nums = [1,1]
// Output: [2]


/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function(nums) { // Time - O(n), space - O(1)
    const result = []

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;

        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1)
        }
    }

    return result
};

// var findDisappearedNumbers = function(nums) { // Time - O(n), space - O(n)
//     const missing = [];
//     const set = new Set([...nums]);
//
//     for (let i = 1; i <= nums.length; i++) {
//         if (!set.has(i)) {
//             missing.push(i);
//         }
//     }
//
//     return missing;
// };

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]), [5, 6])
console.log(findDisappearedNumbers([1,1]), [2])
