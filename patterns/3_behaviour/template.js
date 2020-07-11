// template behaviour pattern

// определяет некую структуру

class Employee {
    constructor(name, salary) {
        this.name   = name;
        this.salary = salary;
    }

    responsibility() {}

    work() {
        return `${this.name} выполняет ${this.responsibility()}`;
    }

    getPaid() {
        return `${this.name} имеет ЗП ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibility() {
        return `процесс создания программ`;
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibility() {
        return `процесс тестирования`;
    }
}

const dev = new Developer('Алексей', 100000);
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Tester('Дарья', 90000);
console.log(tester.getPaid());
console.log(tester.work());
