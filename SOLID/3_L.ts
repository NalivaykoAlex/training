/*
 Liskov substitution principle - принцип подстановки Барбары Лисков (нужно правильно выбирать слои абстракции)

 - Подклассы должны служить заменой для своих супер классов, другими словами функции использующие базовый тип
 должны иметь возможность использовать его под типы

 - Основная цель это проектировать логику таким образом чтобы классы наследники могли спокойно использоваться вместо родителей, но в большинстве случаев
 из-за дополнительных проверок логике лучше всего для обоих классов использовать общий интерфейс, а не наследовать один класс от другого

 - Данный принцип помогает выявлять проблемные абстракции и скрытые связи между сущностями, делать поведение модулей предсказуемой, вводить ограничение
 на наследование чтобы как в примере, потомки не противоречили базовому поведению
*/

// Пример

// BAD

// class Rectangle {
//     constructor(public width: number, public height: number) {}
//
//     setWidth(width: number) {
//         this.width = width;
//     }
//
//     setHeight(height: number) {
//         this.height = height;
//     }
//
//     areaOf(): number {
//         return this.width * this.height;
//     }
// }
//
// class Square extends Rectangle {
//     width: number = 0;
//     height: number = 0;
//
//     constructor(size: number) {
//         super(size, size);
//     }
//
//     setWidth(width: number) {
//         this.width = width;
//         this.height = width;
//     }
//
//     setHeight(height: number) {
//         this.width = height;
//         this.height = height;
//     }
// }


// Good

interface Figure {
    setWidth(width: number): void;
    setHeight(width: number): void;
    areaOf(): void;
}

class Rectangle implements Figure {
    setWidth(width: number) { }
    setHeight(height: number) { }
    areaOf() { }
}

class Square implements Figure {
    setWidth(width: number) { }
    setHeight(height: number) { }
    areaOf() { }
}

// =================================================================

// class Person {
// //     access() {
// //         console.log('У тебя есть доступ');
// //     }
// // }

// class Member extends Person {
//     access() {
//         console.log('У тебя есть доступ');
//     }
// }

// class Guest extends Person {
//     isGuest = true;
// }

// class Frontend extends Member {
//     canCreateFrontend() {}
// }

// class Backend extends Member {
//     canCreateBackend() {}
// }

// class PersonFromDifferentCompany extends Guest {
//     access() {
//         throw new Error('У тебя нет доступа! Иди к себе');
//     }
// }

// // function openSecretDoor(person) {
// //     person.access();
// // }

// function openSecretDoor(member) {
//     person.access();
// }

// openSecretDoor(new Frontend());
// openSecretDoor(new Backend());
// // openSecretDoor(new PersonFromDifferentCompany()); // There should be member!

// =================================================================

class Component {
    isComponent: boolean

    constructor() {
        this.isComponent = true;
    }
    // render() {
    //     return `<div>Component</div>`
    // }
}

class ComponentWithTemplate extends Component {
    render() {
        return `<div>Component</div>`;
    }
}

class HigherOrderComponent extends Component {}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {}
}

class HOC extends HigherOrderComponent {
    render() {
        throw new Error('Render is impossible here');
    }

    wrapComponent(component) {
        component.wrapped = true;

        return component;
    }
}

function renderComponent(component) {
    console.log(component.render());
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
// renderComponent(new HOC());

