/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     if (nums.length === 1) {
//         return nums
//     }
//
//     const withoutZeroes = []
//     const zeroes = []
//
//     for (let i = 0; i < nums.length; i++) {
//         const currentElement = nums[i]
//
//         if (currentElement !== 0){
//             withoutZeroes.push(currentElement)
//         } else {
//             zeroes.push(0)
//         }
//     }
//
//     nums.splice(0, nums.length, ...withoutZeroes.concat(zeroes))
//
//     return nums
// };

var moveZeroes = function(nums) {
    let i = 0

    while (nums[i] !== 0 && i < nums.length) {
        i++
    }

    let j = i + 1

    while (j < nums.length) {
        if (nums[j] === 0) {
            j++
        } else {
            nums[i] = nums[j]

            i++
            j++
        }
    }

    while (i < nums.length) {
        nums[i] = 0
        i++
    }

    return nums
};

/*
 pointerOne = 2
 pointerTwo = 4

 [1,3,12,3,12]
              ^
         ^
*/

console.log(moveZeroes([0,1,0,3,12]), [1,3,12,0,0])
console.log(moveZeroes([0]), [0])
console.log(moveZeroes([1, 0]), [1, 0])
console.log(moveZeroes([2, 1]), [2, 1])