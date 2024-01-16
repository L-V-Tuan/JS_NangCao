// console

// Log number
console.log(100);

// Log string
console.log("Hello World");

// Log multiple values
console.log(20, "Hello", true);

// Log a variable
const x = 100;
console.log(x);

// Console error & warning
console.error("Alert");
console.warn("Warning");

// Log object as table
console.table({ name: "Brad", email: "brad@gmail.com" });

// Group console commands
console.group("simple");
console.log(x);
console.error("Alert");
console.warn("Warning");
console.groupEnd();

// Add CSS to logs
const styles = "padding: 10px; background-color: white; color: green";
console.log("%cHello World", styles);

//--------------------------------------------------------------------------------------------------
console.log("-----------------------------------------------------");

// comment

// This is a single line of code

/*
Multi-line comment
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);
*/

//---------------------------------------------------------------------------------------------------

// Variables

// Ways to declare a variable
// `var`, `let`, & `const`

let firstName = "John";
const lastName = "Doe";
let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
age = 31;
console.log(age);

// With let, we can declare a value without assigning a value
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const z = 100;

// We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
  name: "Brad",
};
person.name = "John";
person.email = "brad@gmail.com";
console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);

//--------------------------------------------------------------------------------------------------
console.log("-----------------------------------------------------");

// Data types

// String
const title = "Lập trình JS nâng cao";

// Number
const time = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score1 = undefined;

// Symbol
const id = Symbol("id");

// BigInt
const n = 9007199254740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

function sayHello() {
  console.log("Hello");
}

const output = sayHello;

console.log(output, typeof output);

//--------------------------------------------------------------------------------------------------
console.log("-----------------------------------------------------");

// Stack heap

// Value is stored in the stack
const major = "CNTT";
const member = 3000;

// Reference is stored in the heap
const person1 = {
  name: "Brad",
  age: 40,
};

let newMajor = major;
newMajor = "Desgin";

let newPerson1 = person1;
newPerson1.name = "Bradley";

console.log(major, newMajor); // CNTT, Desgin
console.log(person1, newPerson1); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }

//--------------------------------------------------------------------------------------------------
console.log("-----------------------------------------------------");

// Type conversion

let amount = "hello";

// Convert string to number
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);

// Convert number to string
amount = amount.toString();
amount = String(amount);

// Convert string to decimal
amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log("foo" / 3);

console.log(amount, typeof amount);

//--------------------------------------------------------------------------------------------------
console.log("-----------------------------------------------------");

// Operators

// 1. Arithmetic Operators

let k;

k = 5 + 5;
k = 5 - 5;
k = 5 * 5;
k = 5 / 5;
k = 7 % 5;

// Concatenation
k = "Hello" + " " + "World";

// Exponent
k = 2 ** 3;

// Increment
k = 1;
// x = x + 1;
k++;

// Decrement
// x = x - 1;
k--;

// 2. Assignment Operators

k = 10;

k += 5;
k -= 5;
k *= 5;
k /= 5;
k %= 5;
k **= 5;

// 3. Comparison Operators

// Equal to (Just the value, not the type)
k = 2 == "2";

// Equal to (Type and value)
k = 2 === "2";

// Not equal to (Just the value, not the type)
k = 2 != "2";

// Not equal to (Type and value)
k = 2 !== 2;

// Greater than and less than
k = 10 > 5;
k = 10 < 5;
k = 10 <= 5;
k = 10 >= 5;

console.log(k);

//--------------------------------------------------------------------------------------------------
console.log("-----------------------------------------------------");

// Type coercion

let l;

// Coerced to a string
l = 5 + "5";

l = 5 + Number("5");

// Coerced to a number
l = 5 * "5";

// null is coerced to 0 as it is a `falsy` value
l = 5 + null;

l = Number(null);

l = Number(true);
l = Number(false);

// true is coerced to a 1
l = 5 + true;

// false is coerced to 0 (falsy)
l = 5 + false;

// Undefined is coerced to 0 (falsy)
l = 5 + undefined;

console.log(l, typeof l);

//--------------------------------------------------------------------------------------------------
console.log("-----------------------------------------------------");

// String

let x1;

const name1 = "John";
const age1 = 31;

// Concatenation
x1 = "Hello, my name is " + name1 + " and I am " + age1 + " years old";

// Template Literals
x1 = `Hello, my name is ${name1} and I am ${age1} years old`;

// String Properties and Methods

// Creating a "string object" (JS does this automatically when using a propery or method on a primitive string)
const s = new String("Hello World");

x1 = typeof s;

x1 = s.length;

// Access value by key
x1 = s[0];

// Shows the prototype of the string object. Shows the properties and methods
x1 = s.__proto__;

// Change case
x1 = s.toUpperCase();
x1 = s.toLowerCase();

// charAt() - returns the character at the specified index
x1 = s.charAt(0);

// indexOf - returns the index of the first occurrence of a specified value in a string
x1 = s.indexOf("d");

// substring() - search a string for a specified value
x1 = s.substring(2, 5);
x1 = s.substring(7);

// slice() - extracts a part of a string and returns a new string
x1 = s.slice(-11, -6);

// trim() - remove whitespace from beginning and end of string
x1 = "         Hello World";
x1 = x1.trim();

// replace() - replace all instances of a string
x1 = s.replace("World", "John");

// includes() - returns true if the string is found
x1 = s.includes("Hell");

// valueOf() - returns the primitive value of a variable
x1 = s.valueOf();

// split() - returns an array of strings
x1 = s.split("");

console.log(x1);

//--------------------------------------------------------------------------------------------------
console.log("-----------------------------------------------------");

// Capitalize challenge

// Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
const myString = "developer";

let myNewString;

// Solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);

//--------------------------------------------------------------------------------------------------
console.log("-----------------------------------------------------");

// Numbers

let x2;

const num = new Number(5);

// toString() - returns a string representation of the number
x2 = num.toString();
// To get the length
x2 = num.toString().length;

// toFixed() - returns a string representation of the number with a specified number of decimals
x2 = num.toFixed(2);

// toPrecision() - returns a number with the specified length
x2 = num.toPrecision(3);

// toExponential() -  convert a number to exponential notation and return its value as a string
x2 = num.toExponential(2);

// toLocaleString() - returns a string representation of the number, using the current locale
x2 = num.toLocaleString("en-US");

// valueOf - Get value
x2 = num.valueOf();

// The Number object itself has some properties and methods

// Largest and smallest possible number
x2 = Number.MAX_VALUE;
x2 = Number.MIN_VALUE;

console.log(x2);

//--------------------------------------------------------------------------------------------------
console.log("-----------------------------------------------------");

// Math Object

let x3;

// Square root
x3 = Math.sqrt(9);

// Absolute value
x3 = Math.abs(-5);

// Round
x3 = Math.round(4.2);

// Round up
x3 = Math.ceil(4.2);

// Round down
x3 = Math.floor(4.9);

// Exponent
x3 = Math.pow(2, 3);

// Minimum number
x3 = Math.min(4, 5, 3);

// Maximum number
x3 = Math.max(4, 5, 3);

// Get a random number/decimal between 0 and 1
x3 = Math.random();

// Get a random number between 1 and 100
x3 = Math.floor(Math.random() * 100 + 1);

console.log(x3);

//--------------------------------------------------------------------------------------------------
console.log("-----------------------------------------------------");

// Number Challenge

const x4 = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

// Get the sum
const sum = x4 + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// Get the difference
const diff = x4 - y;
const diffOutput = `${x4} - ${y} = ${diff}`;
console.log(diffOutput);

// Get the product
const prod = x4 * y;
const prodOutput = `${x4} * ${y} = ${prod}`;
console.log(prodOutput);

// Get the quotient
const quot = x4 / y;
const quotOutput = `${x4} / ${y} = ${quot}`;
console.log(quotOutput);

// Get the remainder
const rm = x4 % y;
const rmOutput = `${x4} % ${y} = ${rm}`;
console.log(rmOutput);

//--------------------------------------------------------------------------------------------------
console.log("-----------------------------------------------------");

// Dates and Times

let d1;

// Get today's date and time
d1 = new Date();

// Set to a string
d1 = d1.toString();

// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
d1 = new Date(2021, 0, 10, 12, 30, 0);

// Pass in a string
d1 = new Date("2021-07-10T12:30:00");
d1 = new Date("07/10/2021 12:30:00");
d1 = new Date("2022-07-10");
d1 = new Date("07-10-2022");

// Get current timestamp
d1 = Date.now();

// Get the timestamp of a specific date
d1 = new Date();
d1 = d1.getTime();
d1 = d1.valueOf();

// Create a date from a timestamp
d1 = new Date(1666962049745);

// Convert from milliseconds to seconds
d1 = Math.floor(Date.now() / 1000);

console.log(d1);

//--------------------------------------------------------------------------------------------------
console.log("-----------------------------------------------------");

// Date Object Methods

let x5;
let d2 = new Date();

// Date methods

x5 = d2.toString();

x5 = d2.getTime();
x5 = d2.valueOf();

x5 = d2.getFullYear();

x5 = d2.getMonth();
x5 = d2.getMonth() + 1;

x5 = d2.getDate();

x5 = d2.getDay();

x5 = d2.getHours();

x5 = d2.getMinutes();

x5 = d2.getSeconds();

x5 = d2.getMilliseconds();

x5 = `${d2.getFullYear()}-${d2.getMonth() + 1}-${d2.getDate()}`;

// Intl.DateTimeFormat API (locale specific)
x5 = Intl.DateTimeFormat("en-US").format(d2);
x5 = Intl.DateTimeFormat("en-GB").format(d2);
x5 = Intl.DateTimeFormat("default").format(d2);

x5 = Intl.DateTimeFormat("default", { month: "long" }).format(d2);

x5 = d2.toLocaleString("default", { month: "short" });

x5 = d2.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/New_York",
});

console.log(x5);
