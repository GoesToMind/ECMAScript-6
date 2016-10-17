class Car {
  constructor(options) {
    this.title = options.title;
  }
  drive() {
    return 'vroom';
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  honk() {
    return 'beep';
  }
}

const toyota = new Toyota({ title: 'Toyota', color: 'red' });

console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());
