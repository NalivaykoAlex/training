// a=[1, 2, 5] b=[-1, 2, 3, 4, 6]
// out=[-1, 1, 2, 2, 3, 4, 5, 6]

// [1,2,5,6] [3,4,7,8]

function fn(a, b) {
    const result = []
    let startIndexA = 0
    let startIndexB = 0
    const sumLength = a.length + b.length

    while (result.length !== sumLength && a[startIndexA] && b[startIndexB]) {
        const currentElementA = a[startIndexA];
        const currentElementB = b[startIndexB];

        if (currentElementA > currentElementB) {
            result.push(currentElementB)
            startIndexB++
        }

        if (currentElementA < currentElementB) {
            result.push(currentElementA)
            startIndexA++
        }

        if (currentElementA === currentElementB) {
            result.push(currentElementA)
            result.push(currentElementB)

            startIndexB++
            startIndexA++
        }
    }

    if (a[startIndexA]) {
        return [...result, ...a.slice(startIndexA)]
    }

    if (b[startIndexB]) {
        return [...result, ...b.slice(startIndexB)]
    }

    return result
}

console.log(fn([1,2,5], [-1,2,3,4,6]), 'fn')
console.log(fn([-1,2,3,4,6,7, 8], [1,2,5]), 'fn')
console.log(fn([-1,2,3,], [1,2,5]), 'fn')