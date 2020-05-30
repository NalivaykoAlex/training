// observer behaviour patttern

// формирует зависимости один к многим


// так же его могут называть publisher, listener, subcriber, dispatcher

class Subject {
  constructor() {
    this.observers = [];
  }

  subcriber(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  fire(action) {
    this.observers.forEach((observer) => {
      observer.update(action);
    })
  }
}

class Observer {
  constructor(state = 1) {
    this.state = state;
    this.initialStatte = state;
  }

  update(action) {
    switch (action.type) {
      case 'INCREMENT':
        this.state = ++this.state
        break;
      case 'DECREMENT':
        this.state = --this.state;
        break;
      case 'ADD':
        this.state += action.payload;
        break;
      default: 
        this.state = this.initialStatte;
    }

  }
}

const stream$ = new Subject();

const obs1 = new Observer();
const obs2 = new Observer(42);

stream$.subcriber(obs1)
stream$.subcriber(obs2)

// измеяет все подписки
stream$.fire({ type: 'INCREMENT' });
stream$.fire({ type: 'INCREMENT' });
stream$.fire({ type: 'DECREMENT' });
stream$.fire({ type: 'ADD', payload: 10 });

console.log(obs1.state);
console.log(obs2.state);
