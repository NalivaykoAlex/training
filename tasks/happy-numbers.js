// если число повторилось допустим "3" повторилось 3 раза оно считается счастливым, так же, если таких чисел будет не одно, то взять максимальное, если не нашли, то вывести ноль

const numbers = '1122333444455667788'

function findHappyNumbers(numbers) {
    const arrNumbers = [...numbers]
    const data = {}
    const result = []

    for (let i = 0; i < arrNumbers.length; i++) {
        const currentElement = arrNumbers[i]

        data[currentElement]
            ? data[currentElement] += 1
            : data[currentElement] = 1
    }

    Object.keys(data).forEach((key) => {
        if (key == data[key]) {
            result.push(data[key])
        }
    })

    if (!result.length) {
        return 0
    }

    return Math.max(...result)
}

console.log(findHappyNumbers(numbers))