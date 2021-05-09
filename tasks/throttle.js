function throttle (fn, ms) {
    let isThrottled = false;
    let saveArgs;
    let saveThis;

    function wrapper () {
        if (isThrottled) {
            saveArgs = arguments;
            saveThis = this;

            return;
        }

        fn.apply(this, arguments);

        isThrottled = true;

        setTimeout(function () {
            if (saveArgs) {
                wrapper.apply(saveThis, saveArgs);
                saveArgs = saveThis = null;
            }

            isThrottled = false;
        }, ms);
    }

    return wrapper;
}

function mouseMove() {
    console.log(new Date());
}

mouseMove = throttle(mouseMove, 3000);

setInterval(mouseMove, 1000);

