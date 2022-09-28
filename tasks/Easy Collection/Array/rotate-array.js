// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (nums.length === 1) {
        return
    }

    if (k > nums.length) {
        k = nums.length
    }

    while (k !== 0) {
        nums.splice(0, 0, nums.pop())

        k--
    }
};

console.log(rotate([1,2,3,4,5,6,7], 3), [5,6,7,1,2,3,4])
console.log(rotate([1,2], 3), [2, 1])