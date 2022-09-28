const { array1000Elements } = require('./const')
let count = 0

// сложность O(n) так как в худшем случаи нужно будет обойти весь массив
function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i]

        count++

        if (currentElement === item) {
            return i
        }
    }

    return null
}

console.log(array1000Elements.length, 'Кол-во элементов')
console.log(linearSearch(array1000Elements, 999))
console.log(count, 'count')
