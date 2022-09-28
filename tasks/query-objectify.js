const initData = "user.name.firstName=Bob&user.name.lastName=Smith&user.favoriteColor=Light%20Blue&experiment.theme=dark";

function queryObjectify(str) {
    const newStr = str.split('&')
    const arr = []

    for (let i = 0; i < newStr.length; i++) {
        const currentValue = newStr[i]
        const [path, value] = currentValue.split('=')

        arr.push({ keys: path.split('.'), value })
    }

    let result = {}

    for (let i = 0; i < arr.length; i++) {
        let obj = result
        const { keys, value } = arr[i]


        for (let j = 0; j < keys.length; j++) {
            const currentValue = keys[j]
            const lastElement = keys[keys.length - 1]

            if (currentValue === lastElement) {
                obj[currentValue] = decodeURIComponent(value)

                break
            }

            if (obj[currentValue]) {
                obj = obj[currentValue]
            } else {
                obj[currentValue] = {}

                obj = obj[currentValue]
            }
        }
    }

    return result
}

console.log(queryObjectify(initData))


// Какой результат должны получить
// {
//     user: {
//         name: {
//             firstName: 'Bob',
//             lastName: 'Smith',
//         },
//         favoriteColor: 'Light Blue',
//     }
//     experiment: {
//         theme: 'dark'
//     }
// }
