// поиск простых чисел

function pureNumbers(n) {
    const result = [];

    for (let i = 2; i <= n; i++) {
        let isPure = true;

        for(let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPure = false;

                break;
            }
        }

        if (isPure) {
            result.push(i);
        }
    }

    return result;
}

console.log(pureNumbers(120), 'PureNumbers');

// Простое число или нет
function isPrime(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return num > 1;
}

// console.log("1", isPrime(1));
// console.log("2", isPrime(2));
// console.log("3", isPrime(3));
// console.log("4", isPrime(4));
// console.log("5", isPrime(5));
// console.log("6", isPrime(6));
// console.log("7", isPrime(7));
// console.log("8", isPrime(8));
// console.log("9", isPrime(9));
// console.log("109", isPrime(109));
// console.log("111", isPrime(111));


function getPrimes(num) {
    const primes = [];

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

console.log(getPrimes(120), 'getPrimes');

// алгоритм "Решето Эратосфена"

function getPrimes2(num) {
    const seive = [];
    const primes = [];

    for (let i = 2; i <= num; i++) {
        if (!seive[i]) {
            primes.push(i);

            for (let j = i * 2; j <= num; j += i) {
                seive[j] = true;
            }
        }
    }

    return primes;
}

console.log(getPrimes2(120), 'getPrimes2');

