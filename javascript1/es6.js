// shorthand property names

{
  const ellie1= {
    name: 'Ellie',
    age: '18',
  };

  const name= 'Ellie';
  const age= '18';

  //2
  const ellie2={
    name: name,
    age: age,
  };

  //3
  const ellie3={
    name,
    age,
  };

  console.log(ellie1, ellie2, ellie3)
}

{
  //object
  const student= {
    name: 'Anna',
    level: 1,
  }:
}

//2
{
  const name= studnet.name;
  const level = student.level;
  console.log(name, level);
}

//3
{
  const {name, level} = student;
  console.log(name, level);

  const {name: studentName, level: studentLevel } =student;
  console.log(studentName, studentLevel);
}

//array
const animals = ['dog', 'cat'];

//2
{
  const first = animals[0];
  const second = animals[1];
  console.log(first, second);
}

//3
{
  const [first, second] = animals;
  console.log(first, second);
}

//spread syntax
{
const obj1 = {key: 'key1'};
const obj2 = {key: 'key2'};
const array = {obj1, obj2};

//array copy
const arrayCopy = [...array];
console.log(array, arrayCopy);

const arrayCopy2 = [...array, {key: 'key3'}];
obj1.key= 'newKey';
console.log(array, arrayCopy, arrayCopy2)
}

//object copy
{
const obj3 = {...obj1};
console.log(obj3);

//array concatenation
const fruits1 = {'apple', 'strawberry'};
const fruits2 = ['banana', 'kewi'];
const fruits = [...fruits1, ...fruits2];
console.log(fruits);

//object merge
const dog1 = { dog: '개1'};
const dog2 = { dog: '개2'};
const dog = {...dog1, ...dog2};
console.log(dog);
}

//Default parameters

{
  //1
  {
    function printMessage(message='default message';){
      console.log(message);
    }

    printMessage('hello');
    printMessage();
  }
}
