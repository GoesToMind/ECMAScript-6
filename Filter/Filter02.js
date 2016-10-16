const products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
];

const filteredProducts = products.filter(element => {
  return element.type === 'fruit' && element.quantity > 0 && element.price < 10;
});

console.log(filteredProducts);
