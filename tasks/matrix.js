// нужно вывести цифры по спирали, начиная с середины 123456789123 и т.д

// @TODO дорешать эту задачу
const input = [
    [7, 1, 2, 3, 4],
    [6, 9, 2, 3, 5],
    [5, 8, 1, 4, 6],
    [4, 7, 6, 5, 7],
    [3, 2, 1, 9, 8]
];

const input2 = [
    [1, 2, 3, 4, 5],
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9]
];

function snailFromCenter(matrix) {
    const middle = Math.floor(matrix.length / 2)
    const startElement = matrix[middle][middle]
    const result = [startElement]

    matrix.slice(1, matrix.length - 1).forEach((row) => {
        console.log(row.slice(1, row.length -1))
    })

    return result
}

console.log(snailFromCenter(input))

function snail(array) {
    const vector = [];

    while (array.length) {
        vector.push(...array.shift());
        array.map(row => vector.push(row.pop()));
        array.reverse().map(row => row.reverse());
    }

    return vector;
}

// console.log(snail(input2))

function mySnail(matrix) {
    const result = [...matrix[0]]

    if (matrix.length === 1) {
        return result.flat();
    }

    const middle = matrix.slice(1, matrix.length -1).map((row) => {
        return row.slice(1, row.length - 1)
    })

    console.log(middle, 'middle')

    console.log(result, 'RESULT')

    matrix.slice(1, matrix.length -1).forEach((row) => {
        result.push(row[row.length -1])
    })

    matrix[matrix.length -1].reverse().forEach((number) => result.push(number))

    matrix.slice(1, matrix.length -1).reverse().forEach((row) => {
        result.push(row[0])
    })

    if (middle.length > 0) {
        result.push(mySnail(middle))
    }

    return result.flat()
}

// console.log(mySnail(input2))

function getMiddle(length) {
    return Math.floor(length / 2)
}

function spiralMatrix(matrix) {
    let startRow = 0;
    let endRow = matrix.length - 1;

    let startCol = 0;
    let endCol = matrix.length - 1;

    const result = []

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result.push(matrix[startCol][i])
        }

        startRow++

        for (let i = startRow; i <= endRow; i++) {
            result.push(matrix[i][endCol])
        }

        endCol--

        for (let i = endCol; i >= startCol; i--) {
            result.push(matrix[endRow][i])
        }

        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            result.push(matrix[i][startCol])
        }

        startCol++;
    }

    return result
}

// console.log(spiralMatrix(input2))

// заполнить матрицу по спирали

matrix = (w = 5, h = 5) => {
    const result = new Array(h).fill().map(() => new Array(w).fill(""));
    let counter = 1;
    let startCol = 0;
    let endCol = w - 1;
    let startRow = 0;
    let endRow = h -1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startCol][i] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return result
}

// console.log(matrix());

