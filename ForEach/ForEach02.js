const numbers = [1, 2, 3, 4, 5];

let sum = 0;

const adder = number => {
  sum += number;
};

numbers.forEach(adder);

console.log(sum);
