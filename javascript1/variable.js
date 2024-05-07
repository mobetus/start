'use strict';

// Variable, rw(read/write)
//let (added in es6)
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

//var 이제는 거의 쓰지 않는다
{
  age = 4;
  var age;
}
console.log(age);

//Constants, r(read only)

const count = 17; //integer
const size = 17.1; // decimal number

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 12534432424234324234234123123123n;
console.log(`value: ${bigInt}, type:${typeof bigInt}`);

//string
const char = 'c';
const brandan = 'brandan';
const greeting = 'hello' + brandan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brandan}!`; //template literals (string)\
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

//boolean
//false: 0, null, undefined, NAN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value; ${canRead}, type:${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//nul
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x; //or let x=undefined;
console.log(`value: ${x}, type${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description},type:${typeof symbol}`);

//object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

//dynamic typing: dynamically typed lanugage
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value ${text}, type:${typeof text}`);
text = 1;
console.log(`value ${text}, type:${typeof text}`);
text = '7' + 5;
console.log(`value ${text}, type:${typeof text}`);
text = '8' / '2';
console.log(`value ${text}, type:${typeof text}`);
console.log(text.charAt(0));
