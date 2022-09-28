const { array1000Elements } = require('./const') // нужен отсортированные данные
// const notSortedArray = [0,1,21,4,4,2,6,7,8,9,16,11,12,18,15]
// notSortedArray.sort((a, b) => a - b) // сортировка по возростанию

let count = 0

// сложность O(log2(n)) так как в худшем случаи log(16) максимум потребуется 4 итерации для нахождения элемента (2 в 4 степени)
function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let middle;
    let found = false
    let position = -1

    while (found === false && start <= end) {
        count++

        middle = Math.floor((start + end) / 2)

        if (array[middle] === item) {
            found = true
            position = middle

            return position
        }

        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }

    return position
}

function binarySearchRecursive(array, item, start, end) {
    count++

    let middle = Math.floor((start + end) / 2)

    if (array[middle] === item) {
        return middle
    }


    if (start >= end) {
        return -1
    }

    if (item < array[middle]) {
        return binarySearchRecursive(array, item, start,middle - 1)
    } else {
        return binarySearchRecursive(array, item, middle + 1,end)
    }

}

console.log(array1000Elements.length, 'Кол-во элементов')
console.log(binarySearchRecursive(array1000Elements, 999, 0, array1000Elements.length))

// console.log(binarySearch(array1000Elements, 999))
console.log(count, 'count')
