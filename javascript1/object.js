const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

//can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

//key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const perosn4 = new Person('ellie', 30);
console.log(perosn4);

function Person(name, age) {
  // this= {};
  this.name = name;
  this.age = age;
  //return this

  console.log('name' in ellie);
  console.log('age' in ellie);
  console.log('random' in ellie);
  console.log(ellie.random);
}

//for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

//object.assign
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

//old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
