const users = [{ name: 'Jill' }, { name: 'Alex' }, { name: 'Bill' }];

const user = users.find(element => {
  return element.name === 'Alex';
});

console.log(user);
