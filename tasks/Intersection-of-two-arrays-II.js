/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) { // time O(n1 + n2), space O(min(n1, n2))
    const map = {}

    let minArr;
    let maxArr;
    if (nums1.length > nums2.length) {
        minArr = nums2
        maxArr = nums1
    } else {
        minArr = nums1
        maxArr = nums2
    }

    for (let i = 0; i < minArr.length; i++) {
        const current = minArr[i];

        map[current] = map[current] ? map[current] + 1 : 1
    }

    const result = []

    for (let i = 0; i < maxArr.length; i++) {
        const current = maxArr[i];

        if (map[current]) {
            result.push(current)
            map[current]--

            if (map[current] === 0) {
                delete map[current]
            }
        }
    }

    return result
};


console.log(intersect([1, 2, 2, 1], [2, 2]), [2, 2])
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9])