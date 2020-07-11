// prototype design pattern

const car = {
    wheels: 4,

    init() {
        console.log(
            `У меня есть ${this.wheels} колёса, мой владелец ${this.owner}`
        );
    }
};

const carWithOwner = Object.create(car, {
    // за скелет берем объект
    owner: {
        value: 'Алексей'
    }
});

console.log(carWithOwner.__proto__ === car);

carWithOwner.init();
