memoize = (clb, ms) => {
    let cache = {};

    return (...args) => {
        console.log('arguments: ', args)

        let n = args[0];

        setTimeout(() => {
            console.log('cleared cache');

            cache = {};
        }, ms)

        if (cache[n]) {
            console.log('return from cache: ', cache[n])

            return cache[n]
        } else {
            let result = clb(n);

            cache[n] = result

            console.log('set cache: ', result)

            return result;
        }
    }
}

const func = (message) => message + Math.random();

const memoizeFunc = memoize(func, 500);

memoizeFunc('hello');
memoizeFunc('hello1');
memoizeFunc('hello');
memoizeFunc('hello1');

setTimeout(() => {
    memoizeFunc('hello');
}, 1000)
