const cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'EXPENSIVE' },
];

const prices = cars.map(element => {
  return element.price;
});

console.log(prices);
