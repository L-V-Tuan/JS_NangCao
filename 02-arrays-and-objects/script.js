let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, "Hello", true, null];

// Array Constructor
const fruits = new Array("apple", "grape", "orange");

// Get value by index
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = "pear";

// length is not read-only
// fruits.length = 2;

fruits[3] = "strawberry";

// Using the length as the index will always add on the the end
fruits[fruits.length] = "blueberry";
fruits[fruits.length] = "peach";

x = fruits;

console.log(x);

//----------------------------------------------------------------

let x1;

const arr = [28, 38, 44, 29, 109];

// push() - Push a value on to the end of the array
arr.push(100);

// pop() - Take the last value off
arr.pop();

// unshift() - Add a value to the beginning of the array
arr.unshift(99);

// shift() - Remove first value
arr.shift();

// reverse() - Reverse an array
arr.reverse();

// includes() - Check to see if something is in the array
x1 = arr.includes(445);

// indexOf() - Return the index of the first match
x1 = arr.indexOf(28);

// Return array as a string
x1 = arr.toString();
x1 = arr.join();

// slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
x1 = arr.slice(1, 4);

// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
x1 = arr.splice(1, 4);

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
x1 = arr.splice(4, 1);

// Chaining methods - Some methods can be chained depending on the return value.
x1 = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x1);

//----------------------------------------------------------------

let x2;

const fruits1 = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "rasberry"];

// Nesting arrays

// Nesting berries inside of fruits
fruits1.push(berries);

// Now we can access 'blueberry' with the following
x2 = fruits1[3][1];

// Create a new variable and nest both arrays
const allFruits = [fruits1, berries];

x2 = allFruits[1][2];

// concat() - Concatenate arrays
x2 = fruits1.concat(berries);

// spread operator (...) - Concatenate with
x2 = [...fruits1, ...berries];

// flat() - Flatten an array
const arr2 = [1, 2, [3, 4, 5], 6, [7, 8]];
x2 = arr2.flat();

// Static methods of Array object

// isArray() - Check is is an array
x2 = Array.isArray(fruits1);

// from() - Create an array from an array like value
x2 = Array.from("12345");

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x2 = Array.of(a, b, c);

console.log(x2);

//----------------------------------------------------------------

// Challenge 1

const arr1 = [1, 2, 3, 4, 5];

// arr.reverse();
// arr.push(0);
// arr.unshift(6);

// Same result as above
arr1.push(6);
arr1.unshift(0);
arr1.reverse();

console.log(arr);

// Challenge 2

const arr4 = [1, 2, 3, 4, 5];
const arr5 = [5, 6, 7, 8, 9, 10];

// Solution 1
const arr6 = arr4.slice(0, 4).concat(arr5);

// Solution 2
const arr7 = [...arr4, ...arr5];
arr4.splice(4, 1);

const arr8 = [...arr7];
console.log("Arr8:--------" + arr8);

console.log(arr7);

//----------------------------------------------------------------

let x3;

// Creating an object
const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "sports"],
};

const newPerson5 = { ...person };
newPerson5.name = "Gojo Satoru";
console.log(person);
console.log(newPerson5);

// Accessing object properties
x3 = person.name; // Dot notation
x3 = person["age"]; // Bracket notation
x3 = person.address.state;
x3 = person.hobbies[0];

// Updating properties
person.name = "Jane Doe";
person["isAdmin"] = false;

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Keys with multiple words
const person1 = {
  "first name": "Brad",
  "last name": "Traversy",
};

x3 = person1["first name"];

console.log(x3);

//----------------------------------------------------------------

let x4;

// Create object using the object constructor
const todo = new Object();

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x4 = todo;

// Object Nesting
const person2 = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x4 = person2.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Spread operator
const obj3 = { ...obj1, ...obj2 };
// Same as using ...
const obj4 = Object.assign({}, obj1, obj2);

// Array of objects
const todos = [
  { id: 1, name: "Buy Milk" },
  { id: 2, name: "Pickup kids from school" },
  { id: 3, name: "Take out trash" },
];

x4 = todos[0].name;

// Get array of object keys
x4 = Object.keys(todo);

// Get length of an object
x4 = Object.keys(todo).length;

// Get array of object values
x4 = Object.values(todo);

// Get array of object key/value pairs
x4 = Object.entries(todo);

// Check if object has a property
x4 = todo.hasOwnProperty("age");

console.log(x4);

//----------------------------------------------------------------

// Setting object properties with the same name as a variable
const firstName = "John";
const lastName = "Doe";
const age = 30;

const person3 = {
  firstName,
  lastName,
  age,
};

console.log(person3.age);

// Destructuring object properties

const todo1 = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "John",
  },
};

const {
  id: todoId, // rename id to todoId
  title,
  user: { name }, // destructuring multiple levels
} = todo1;

console.log(todoId);

// Destructuring arrays & using the rest/spread operator
const numbers1 = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);

//----------------------------------------------------------------

const post = {
  id: 1,
  title: "Post One",
  body: "This is the body",
};

// Convert to JSON string
const str = JSON.stringify(post);

console.log(str.id);

// Parse JSON
const obj = JSON.parse(str);

console.log(obj.id);

// JSON & arrays
const posts = [
  {
    id: 1,
    title: "Post One",
    body: "This is the body",
  },
  {
    id: 2,
    title: "Post Two",
    body: "This is the body",
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);

//----------------------------------------------------------------

// Step 1
const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Mockingjay",
    author: "Suzanne Collins",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
