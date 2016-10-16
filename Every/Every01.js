const computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];

const allComputersHaveMoreThan16 = computers.every(element => {
  return element > 16;
});

console.log(allComputersHaveMoreThan16);
