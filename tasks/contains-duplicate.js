// Example 1:
//
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
//
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
//
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     const obj = {}
//
//     for (let i = 0; i < nums.length; i++) {
//         const currentValue = nums[i]
//
//         obj[currentValue] = obj[currentValue] ? obj[currentValue] += 1 : 1
//     }
//
//     return Object.keys(obj).some((key) => {
//         if (obj[key] >= 2) {
//             return true
//         }
//     })
// };

// var containsDuplicate = function(nums) {
//     const set = new Set(nums)
//
//     return nums.length !== set.size
// };

var containsDuplicate = function(nums) { // это самый производительный вариант
    const set = new Set();

    return nums.some((number) => {
        if (set.has(number)) {
            return true
        } else {
            set.add(number)

            return false
        }
    })
};

console.log(containsDuplicate([1,2,3,1]), true)
console.log(containsDuplicate([1,2,3,4]), false)
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), true)