// ==== нативный Bind

function logPerson() {
    console.log(`привет ${this.name}, твой возраст ${this.age}`);
}

bind = (context, fn) => (...args) => fn.apply(context, args);

bind(person2, logPerson)();