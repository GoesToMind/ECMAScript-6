const savedFile = {
  extension: 'jpg',
  name: 'interview',
  size: 14040,
};

function fileSumary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`;
}

console.log(fileSumary(savedFile));
