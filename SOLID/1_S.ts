/*
    single Responsibility principle - принцип единой ответственности

    - У модуля должна быть только одна причина для изменения или класс должен отвечать за что то одно

    - Основная идея, организовать свой код таким образом, что в случаи изменения задействовать наименьшие количество модулей в идеале один класс

    - Данный принцип помогает декомпозировать или разбивать общее конструкции на независимые модули, уменьшать межмодульную связь и помогает изменять
    меньшее их количество при внесении изменения, а также ограничивать неконтролируемое влияние этих изменений на несвязанные сущности

 */

// Пример

// class Auto {
//     // в процессе жизни проекта методов становилось все больше и больше (свалка с кучей методов)
//     constructor(model: string) {}
//     getCarModel() {}
//     saveCustomerOrder(o: object) {}
//     setCarModel() {}
//     getCustomerOrder(id: string) {}
//     removeCustomerOrder(id: string) {}
//     updateCarSet(set: object) {}
// }

// как нужно поступить!

// сущность отвечает за взаимодействие с авто
class Auto {
    constructor(model: string) {}
    getCarModel() {}
    setCarModel() {}
}

// за работу с клиентскими заказами
class CustomerAuto {
    saveCustomerOrder(o: object) {}
    getCustomerOrder(id: string) {}
    removeCustomerOrder(id: string) {}
}

// за манипуляцию с авто в базе данных
class AutoDB {
    updateCarSet(set: object) {}
}

// -----------

class News {
    private modified: boolean;

    constructor(private title: string, private text: string) {
        this.title    = title;
        this.text     = text;
        this.modified = false;
    }

    update(text) {
        this.text     = text;
        this.modified = true;
    }

    // Так не правильно!!!

    // toHTML() {
    //     return `
    //       <div class="news>
    //         <h1>${this.title}</h1>
    //         <p>${this.text}</p>
    //       </div>
    //     `;
    // }

    // toJSON() {
    //     return JSON.stringify(
    //         {
    //             title: this.title,
    //             text: this.text,
    //             modified: this.modified
    //         },
    //         null,
    //         2
    //     );
    // }
}

class NewsPrinter {
    constructor(private news: Record<string, any>) {
        this.news = news;
    }

    html() {
        return `
            <div class="news>
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>
        `;
    }

    json() {
        return JSON.stringify(
            {
                title   : this.news.title,
                text    : this.news.text,
                modified: this.news.modified
            },
            null,
            2
        );
    }

    xml() {
        return `
            <news>
                <title>${this.news.title}</title>
                <text>${this.news.text}</text>
            </news>
        `;
    }
}

const printer = new NewsPrinter(new News('Лошадь', 'бегала быстро'));

console.log(printer.html());
console.log(printer.json());
console.log(printer.xml());
