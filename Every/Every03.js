function Field(value) {
  this.value = value;
}

Field.prototype.validate = function () {
  return this.value.length > 0;
};

const username = new Field('user01');
const password = new Field('password01');

const fields = [username, password];

const valid = fields.every(element => {
  return element.validate();
});

console.log(valid);
