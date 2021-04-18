/*
    Open close Principle - принцип открытости и закрытости

    - Модуль должен быть открыт для расширения, но закрыт для изменения

    - Основная идея принципа, разработка устойчивого к изменениям приложения и закладывание такой архитектуры чтобы
    небольшое изменение класса не затрагивала кучу связанных с ним модулей

    - Данный принцип помогает проектировать модули выполняющие только одну задачу вводит абстракцию через которую происходит связь сущностей
    позволяет расширять имплементацию и защищает ее от изменений, выносит взаимодействие разных модулей в отдельную прозрачную сущность

*/

// Пример

// Bad

// class Auto {
//     constructor(public model: string) { }
//     getCarModel() { }
// }
//
// const shop: Array<Auto> = [
//     new Auto('Tesla'),
//     new Auto('Audi'),
// ];
//
// const getPrice = (auto: Array<Auto>): string | void => {
//     for (let i = 0; i < auto.length; i++) {
//         switch (auto[i].model) {
//             case 'Tesla': return '80 000$';
//             case 'Audi': return '50 000$';
//             default: return 'No Auto Price';
//         }
//     }
// }
//
// getPrice(shop);

// Good

abstract class CarPrice {
    abstract getPrice(): string;
}

class Tesla extends CarPrice {
    getPrice() {
        return '80 000$';
    }
}

class Audi extends CarPrice {
    getPrice() {
        return '50 000$';
    }
}

class Bmw extends CarPrice {
    getPrice() {
        return '70 000$';
    }
}

const shop: Array<CarPrice> = [
    new Tesla(),
    new Audi(),
    new Bmw(),
];

const getPrice = (auto: Array<CarPrice>): string | void => {
    for (let i = 0; i < auto.length; i++) {
        auto[i].getPrice();
    }
}

getPrice(shop);

// -----------

class Shape {
    area() {
        throw new Error('Area method should be implemented');
    }
}

class Square extends Shape {
    constructor(readonly size: number) {
        super();

        // this.type = 'square';
        this.size = size;
    }

    area() {
        return this.size ** 2;
    }
}

class Circle extends Shape {
    constructor(readonly radius: number) {
        super();

        // this.type = 'circle';
        this.radius = radius;
    }

    area() {
        return this.radius ** 2 * Math.PI;
    }
}

class Rect extends Shape {
    constructor(readonly width: number, readonly height: number) {
        super();

        // this.type = 'rect';
        this.width  = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(readonly a: number, readonly b: number) {
        super();

        this.a = a;
        this.b = b;
    }

    area() {
        return (this.a * this.b) / 2;
    }
}

class AreaCalculator {
    constructor(private shapes = []) {
        this.shapes = shapes;
    }

    // sum() {
    //     return this.shapes.reduce((acc, shape) => {
    //         if (shape.type === 'circle') {
    //             acc += shape.radius ** 2 * Math.PI;
    //         } else if (shape.type === 'square') {
    //             acc += shape.size ** 2;
    //         } else if (shape.type === 'rect') {
    //             acc += shape.width * shape.height;
    //         }

    //         return acc;
    //     }, 0);
    // }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area();

            return acc;
        }, 0);
    }
}

// console.log(new Circle(5));

const calc = new AreaCalculator([
    new Square(10),
    new Circle(1),
    new Circle(5),
    new Rect(10, 20),
    new Triangle(10, 15)
]);

console.log(calc.sum());
