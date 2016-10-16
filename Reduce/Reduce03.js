const splitString = string => {
  return string.split('');
};

const parens = ')(';

const arrParens = splitString(parens);

const balance = arrParens.reduce((previous, char) => {
  if (previous < 0) {
    return previous;
  }
  if (char === '(') {
    return ++previous;
  }
  if (char === ')') {
    return --previous;
  }
  return previous;
}, 0);

console.log(!balance);
