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

pureNumbers(100);