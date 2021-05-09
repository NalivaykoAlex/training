const input = [4, 1, 2, 1, 2];

const singleNumbers = function (nums) {
    const numberObject = {}
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (numberObject[nums[i]]) {
            numberObject[nums[i]] += 1;
        } else {
            numberObject[nums[i]] = 1;
        }
    }

    Object.keys(numberObject).forEach((item) => {
        if (numberObject[item] === 1) {
            result.push(parseInt(item));
        }
    })

    return result;
}

console.log(singleNumbers(input));

// другой способ
//
// [4, 1, 2, 1, 2];
//
// Uniq = [4, 1, 2];
//
// (4 + 1 + 2) * 2 = 14;
//
// 4 + 1 + 2 + 1 + 2 = 10;
//
// 14 - 10 = 4


// Сложность O(n)
const singleNumbers1 = function (nums) {
    let uniq = new Set();
    let uniqSum = 0;
    let numSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];

        if (!uniq.has(current)) {
            uniq.add(current);
            uniqSum += current;
        }

        numSum += current;
    }

    return (uniqSum * 2 ) - numSum;
}

console.log(singleNumbers1(input));


// другой способ
const singleNumbers2 = function (nums) {
    let uniq = Array.from(new Set(nums));

    const reduceSum = (a, b) => a + b;

    let uniqSum = uniq.reduce(reduceSum);
    let numSum = nums.reduce(reduceSum);

    return (uniqSum * 2 ) - numSum;
}

console.log(singleNumbers2(input));
