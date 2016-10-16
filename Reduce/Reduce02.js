const primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'brue' },
];

const colors = primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color);
  return previous;
}, []);

console.log(colors);
