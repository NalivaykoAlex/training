const factorial = (n) => {
    if (n === 1) {
        return 1
    }

    return n * factorial(n -1)
}

console.log(factorial(5))

// числа фибоначи 1,1,3,5,8,13,21 (последующие числа равные сумме предыдущих)

const fibonachi = (n) => {
    if (n === 1 || n === 2) {
        return 2
    }

    return fibonachi(n -1 ) + fibonachi(n - 2)
}

console.log(fibonachi(8))