// adapter structural pattern

class OldCalc {
    operatorations(t1, t2, operation) {
        switch (operation) {
            case 'add':
                return t1 + t2;
            case 'sub':
                return t1 - t2;

            default:
                return NaN;
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2;
    }

    sub(t1, t2) {
        return t1 - t2;
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc();
    }

    operatorations(t1, t2, operation) {
        switch (operation) {
            case 'add':
                return this.calc.add(t1, t2);
            case 'sub':
                return this.calc.sub(t1, t2);
            default:
                return NaN;
        }
    }
}

const oldCalc = new OldCalc();

console.log(oldCalc.operatorations(10, 4, 'add'));

const newCalc = new NewCalc();

console.log(newCalc.add(10, 4));

const adapter = new CalcAdapter();

console.log(adapter.operatorations(10, 4, 'add'));
