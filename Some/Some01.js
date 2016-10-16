const computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];

const someOfComputersHaveMoreThan16 = computers.some(element => {
  return element.ram > 16;
});

console.log(someOfComputersHaveMoreThan16);
