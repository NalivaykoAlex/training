/*
    Interface segregation principle - принцип разделения интерфейсов

    - Сущности не должны зависеть от интерфейсов, которые не используют, основная проблема ОПП, что потомок может получить
    кучу ненужной функциональности которая в нем не используется, ну и соответственно чтобы с этой проблемой не столкнуться интерфейсы принято
    декомпозировать

    - Плюсы принципа, снижение зависимости между модулями при наследовании нет ненужной функциональности, которую требуется реализовывать, при
    внесении изменений затрагиваются только нужные части, а не все зависящие модули, но и конечно же декомпозиция, то есть разделение сущностей
*/

// Пример

// BAD

// interface AutoSet {
//     getTeslaSet(): any;
//     getAudiSet(): any;
//     getBmwSet(): any;
// }
//
// class Tesla implements AutoSet {
//     getTeslaSet(): any { };
//     getAudiSet(): any { };
//     getBmwSet(): any { };
// }
//
// class Audi implements AutoSet {
//     getTeslaSet(): any { };
//     getAudiSet(): any { };
//     getBmwSet(): any { };
// }
//
// class Bmw implements AutoSet {
//     getTeslaSet(): any { };
//     getAudiSet(): any { };
//     getBmwSet(): any { };
// }

// GOOD

interface TeslaSet {
    getTeslaSet(): any;
}

interface AudiSet {
    getAudiSet(): any;
}

interface BmwSet {
    getBmwSet(): any;
}

class Tesla implements TeslaSet {
    getTeslaSet(): any { };
}

class Audi implements AudiSet {
    getAudiSet(): any { };
}

class Bmw implements BmwSet {
    getBmwSet(): any { };
}

// =====================================

// те классы, которые наследуются от базового класса, если они не используют методы базового класса, то не должны от него зависеть

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     walk() {
//         console.log(`${this.name} умеет ходить`);
//     }

//     swim() {
//         console.log(`${this.name} умеет плавать`);
//     }

//     fly() {
//         console.log(`${this.name} умеет летать`);
//     }
// }

// class Dog extends Animal {
//     fly() {
//         return null;
//     }

// }

// class Eagle extends Animal {
//     swim() {
//         return null;
//     }
// }

// class Whale extends Animal {
//     fly() {
//         return null;
//     }

//     walk() {
//         return null;
//     }
// }

// const dog = new Dog('Рекс');

// dog.walk();
// dog.swim();
// dog.fly();

// const eagle = new Eagle('Орел');

// eagle.fly();
// eagle.swim();
// eagle.walk();

// const whale = new Whale('Большой синий кит');

// whale.swim();
// whale.fly();
// whale.walk();

class Animal {
    constructor(private name: string) {
        this.name = name;
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} умеет плавать`);
    }
};

const flier = {
    fly() {
        console.log(`${this.name} умеет летать`);
    }
};

const walker = {
    walk() {
        console.log(`${this.name} умеет ходить`);
    }
};

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

// @ts-ignore
Object.assign(Dog.prototype, swimmer, walker);
// @ts-ignore
Object.assign(Eagle.prototype, flier, walker);
// @ts-ignore
Object.assign(Whale.prototype, swimmer);

const dog = new Dog('Рекс');

// @ts-ignore
dog.walk();
// @ts-ignore
dog.swim();

const eagle = new Eagle('Орел');
// @ts-ignore
eagle.fly();
// @ts-ignore
eagle.walk();

const whale = new Whale('Большой синий кит');

// @ts-ignore
whale.swim();
