// ===== поправить setTimeout

const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}

// === 1 variant

for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}

// === 2 variant

for (var i = 0; i < arr.length; i++) {
    setTimeout(
        (function (localeCount) {
            return function () {
                console.log(
                    'Index: ' + localeCount + ', element: ' + arr[localeCount]
                );
            };
        })(i),
        3000
    );
}

// === 3 variant

for (var i = 0; i < arr.length; i++) {
    setTimeout(
        function (b) {
            console.log('Index: ' + b + ', element: ' + arr[b]);
        },
        3000,
        i
    );
}

// === 3 variant

for (var i = 0; i < arr.length; i++) {
    setTimeout(
        function (b) {
            console.log('Index: ' + b + ', element: ' + arr[b]);
        },
        3000,
        i
    );
}

// === 4 variant

for (var i = 0; i < arr.length; i++) {
    let count = i;

    setTimeout(function () {
        console.log('Index: ' + count + ', element: ' + arr[count]);
    }, 3000);
}

// === 5 variant

for (var i = 0; i < arr.length; i++) {
    setTimeout(
        (function (i_local) {
            return function () {
                console.log(
                    'The index of this number is: ' +
                        i_local +
                        ' number ' +
                        arr[i_local]
                );
            };
        })(i),
        3000
    );
}

// === 6 variant

for (var i = 0; i < arr.length; i++) {
    (function (local_i) {
        setTimeout(function () {
            console.log(
                'The index of this number is: ' +
                    local_i +
                    ' number ' +
                    arr[local_i]
            );
        }, 3000);
    })(i);
}
