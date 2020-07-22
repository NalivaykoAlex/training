// Замыкание - функция имеет доступ до переменных из выше стоящего scope

function sayHelloTo(name) {
    const message = 'Hello ' + name;

    return function () {
        console.log(message);
    };
}

// const helloToAlex = sayHelloTo('Alex');
// const helloToDaria = sayHelloTo('Daria');
// console.log('helloToAlex', helloToAlex);
// helloToAlex();
// helloToDaria();

function createFrameworkManager() {
    const fw = ['Angular', 'React'];

    return {
        print: function () {
            console.log(fw);
        },
        add: function (framework) {
            fw.push(framework);
        }
    };
}

// const manager = createFrameworkManager();
// // console.log(manager);
// manager.print();
// manager.add('VueJS');
// manager.print();

// setTimeout

const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++) {
    setTimeout(function () {
        console.log(`fib[${i}] = ${fib[i]}`);
    }, 1500);
}

// for (let i = 0; i < fib.length; i++) {
//     setTimeout(function () {
//         console.log(`fib[${i}] = ${fib[i]}`);
//     }, 1500);
// }

// for (var i = 0; i < fib.length; i++) {
//     (function (j) {
//         setTimeout(function () {
//             console.log(`fib[${j}] = ${fib[j]}`);
//         }, 1500);
//     })(i);
// }
