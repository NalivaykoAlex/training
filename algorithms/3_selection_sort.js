const { notSortedArray } = require('./const')
let count = 0

// сложность O(n*2)
function selectionSort(array) { // сортировка выбором
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
            count++
        }
        let tmp = array[i]

        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log(notSortedArray.length, 'Кол-во элементов')
console.log(selectionSort(notSortedArray))
console.log(count, 'count')
