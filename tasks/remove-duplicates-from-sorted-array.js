/**
 * @param {number[]} nums
 * @return {number}
 */

// var removeDuplicates = function(nums) {
//     let pointer = 0
//
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[pointer] !== nums[i]) {
//             pointer++
//             nums[pointer] = nums[i]
//         }
//     }
//
//     return pointer + 1
// };

// var removeDuplicates = function(nums) {
//     for(let i = nums.length - 1; i > 0; i--){
//         if(nums[i] === nums[i-1]){
//             nums.splice(i,1)
//         }
//     }
//
//     return nums.length
// };

var removeDuplicates = function(nums) {
    let p2 = 1

    if (nums.length <= 1) {
        return nums.length
    }

    for (let p1 = 1; p1 < nums.length; p1++) {
        const prev = nums[p1 - 1]
        const current = nums[p1]

        if (current === prev) {
            continue
        }

        nums[p2] = current
        p2++
    }

    return p2
};

console.log(removeDuplicates([1,1,2]), 2)
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]), 5)
