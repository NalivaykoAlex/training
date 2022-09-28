const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function rotate(source) {
    const rotated = source[0].map((_) => [])

    for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < source[i].length; j++) {
            rotated[j][source.length - 1 - i] = source[i][j]
        }

    }

    return rotated
}

console.log(rotate(matrix))


// [1,2,3]    [7,4,1]
// [4,5,6] -> [8,5,2]
// [7,8,9]   [9,6,3]
