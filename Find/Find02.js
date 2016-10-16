function Car(model) {
  this.model = model;
}

const cars = [new Car('Buick'), new Car('Camaro'), new Car('Focus')];

const focus = cars.find(element => {
  return element.model === 'Focus';
});

console.log(focus);
