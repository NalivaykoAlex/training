const { notSortedArray } = require('./const')
let count = 0

function bubbleSort(array) { // сортировка пузырьком сложность O(n*n) n в квадрате(самый менее эффективный алгоритм для сортировки)
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            count++

            if (array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
        }
    }

    return array
}

console.log(notSortedArray.length, 'Кол-во элементов')
console.log(bubbleSort(notSortedArray))
console.log(count, 'count')
