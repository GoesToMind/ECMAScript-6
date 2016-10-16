const products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' },
];

const filteredProducts = products.filter(element => {
  return element.type === 'fruit';
});

console.log(filteredProducts);
