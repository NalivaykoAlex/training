// ==== нативный Bind

const person2 = {
    name: 'alex',
    age: 28
}

function logPerson() {
    console.log(`привет ${this.name}, твой возраст ${this.age}`);
}

bind = (context, fn) => (...args) => fn.apply(context, args);

bind(person2, logPerson)();


function indexOf(arr, el) {
    let result = -1

    for (let i = 0; i < arr.length; i++) {
        console.log('count')
        if (arr[i] === el) {
            result = i

            break
        }
    }


    return result
}

console.log(indexOf([1,2,3], 1), 'indexOf')