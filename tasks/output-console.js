// console.log(1)
//
// const promise = new Promise((resolve => {
//     resolve(2)
// }))
//
// setTimeout(() => {
//     console.log(6)
// }, 2000)
//
// promise
//     .then((data) => console.log(data))
//     .then(() => console.log(5))
//     .then(() => console.log(9))
//
// for (let i = 0; i < 4; i++) {
//     console.log(3)
//     setTimeout(() => {
//         console.log(25)
//     }, 3000)
// }
//
// console.log(4)


// 1, 3,3,3,3 4, 2, 5, 9, 6, 25, 25,25 ,25
//
// var name = 'Ivan'
//
// const obj = {
//     name: 'Alex',
//     getName: () => {
//         console.log(this.name)
//     },
//     getName2() {
//         console.log(this.name)
//     }
// }
//
// obj.getName.bind({ name: 'Lion'})()
// obj.getName2.bind({ name: 'Lion'})()
//
// let bob = {
//     _name: "Bob",
//     _friends: ["stackoverflow"],
//     printFriends:(x)=> {
//         x._friends.forEach((f)=> {
//             console.log(x._name + " knows " + f);
//         });
//     }
// }
//
// // если только параметром в функцию передать
// bob.printFriends = (bob.printFriends).bind(null,bob);
// bob.printFriends();

function memoize(clb) {
    const cache = {}

    return (...rest) => {
        const arg = rest.toString()

        if (cache[arg]) {
            console.log('Из кеша')

            return cache[arg]
        }

        console.log('Новый результат')

        const result = clb.apply(null, rest)

        cache[arg] = result

        return result
    }
}


const func = (a, b) => a + b;

const memoizeFunc = memoize(func);

memoizeFunc(2, 2)
memoizeFunc(2, 2)
memoizeFunc(2, 3)
memoizeFunc(2, 4)
memoizeFunc(2, 2)
