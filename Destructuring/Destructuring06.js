const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];

const newStructure = points.map(([x, y]) => {
  return { x, y };
});

console.log(newStructure);
