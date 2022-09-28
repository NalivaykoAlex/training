/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const result = []

    for (let i = 0; i < matrix.length; i++) {
        const localArr = []

        for (let j = 0; j < matrix.length; j++) {
            const matrix1Element = matrix[j][i]

            localArr.push(matrix1Element)
        }

        result.push(localArr.reverse())
    }

    console.log(result, '1111')
};

/*
    [[1,2,3],[4,5,6],[7,8,9]]




    [[7,4,1],[8,5,2],[9,6,3]]
*/

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]), [[7,4,1],[8,5,2],[9,6,3]]);