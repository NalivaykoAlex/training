// template behaviour patttern

// определяет некую структуру

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  responsibility() {}

  work() {
    return `${this.name} выполняет ${this.responsibility()}`
  }

  getPaid() {
    return `${this.name} имеет ЗП ${this.salary}`
  }
}

class Deleveloper extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibility() {
    return `процесс созданния программ`;
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

const dev = new Deleveloper('Алексей', 100000);
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Tester('Дарья', 90000);
console.log(tester.getPaid());
console.log(tester.work());
