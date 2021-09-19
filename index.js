const inputCalc = document.getElementById('count');

function input(e) {
    inputCalc.value = inputCalc.value + e;
}

function result() {
    if (eval(inputCalc.value) === undefined) {
        inputCalc.value = ""

        return;
    }

    if (eval(inputCalc.value) === Infinity) {
        inputCalc.value = "is infinity result"

        return;
    }

    inputCalc.value = eval(inputCalc.value);
}

function reset() {
    inputCalc.value = '';
}