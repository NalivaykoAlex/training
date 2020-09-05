// нужно вывести цифры по спирали, начиная с середины 123456789123 и т.д

// @TODO дорешать эту задачу
// const input = [
//     [7, 1, 2, 3, 4],
//     [6, 9, 2, 3, 5],
//     [5, 8, 1, 4, 6],
//     [4, 7, 6, 5, 7],
//     [3, 2, 1, 9, 8]
// ];
//
// const getIndex = (number) => Math.floor(number / 2);
//
// for (let i = 0; i < input.length; i++) {
//     for (let k = 0; k < input[i].length; k++) {
//         console.log(input[i][k], 'number');
//     }
//     // const index = getIndex(input.length);
//
//     // const findArr = input[index];
//
//     // console.log(findArr, 'findArr');
// }

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

    console.log(result, 'result')
}

matrix();
