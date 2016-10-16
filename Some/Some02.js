const names = ['Alexandria', 'Matthew', 'Joe'];

const someGreaterThan4 = names.some(element => {
  return element.length > 4;
});

console.log(someGreaterThan4);
