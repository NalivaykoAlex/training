function flatten(array) {
    const result = []

    for (let i = 0; i < array.length; i++) {
        const current = array[i]

        if (Array.isArray(current)) {
            const flat = flatten(current)

            for (let j = 0; j < flat.length; j++) {
                result.push(flat[j])
            }
        } else {
            result.push(current)
        }
    }

    return result
}

console.log(flatten([[1], [[2, 3]], [[[[[[4]]]]]]])) // -> [1, 2, 3, 4]
