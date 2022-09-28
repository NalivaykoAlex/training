const { notSortedArray } = require('./const')
let count = 0

function quickSort(array) { // быстрая сортивка или еще называют сортировкой Хуара, сложность O(log2n * n)
   if (array.length <= 1) {
       return array
   }

    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []

    for (let i = 0; i < array.length; i++) {
        count++

        if (i === pivotIndex) {
            continue
        }

        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }

    }

    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(notSortedArray.length, 'Кол-во элементов')
console.log(quickSort(notSortedArray))
console.log(count, 'count')
