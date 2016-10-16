const names = ['Alexandria', 'Matthew', 'Joe'];

const everyGreaterThan4 = names.every(element => {
  return element.length > 4;
});

console.log(everyGreaterThan4);
