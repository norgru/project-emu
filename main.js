/*
console.log('Hello newbie');

console.error('This is an error');

console.warn('This is a warning');
*/

// variables are var, let and const but var is globally scoped and not used anymore
// so just use const unless I know I'm going to reassign the value

let score;

score = 10;

console.log(score);

// with const you have to assign a value like:

const timestamp = 1335;

// and now you can't change it

//DATATYPES
//String, Number, Boolean, null, undefined

const name = 'John';
const age = "30";
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // this is also undefined

console.log(typeof z); // spits out types of each, but null one spits out 'object' which is bogus AKA wrong

//Concatenation
console.log('My name is ' + name + ' and I am ' + age + ' years old.')

//Template literals/strings BETTER WAY
const hello = `My name is ${name} and I am ${age}`; // notice the back ticks `
console.log(hello);

const s = 'Hello world!';
//console.log(s.substring(0, 5).toUpperCase()); //substring got chars from 0 to 5 and then .touppercase made it upper case
console.log(s.split(''));

const a = 'technology, computers, it, code';
console.log(a.split(', ')); // split the string at comma then space

//Arrays - variables that hold multiple values
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers)

const fruits = ['apples', 'oranges', 'bananas', 'mangoes'];
//now we can't do something like fruits = [] because it's const so we can't reassign it
console.log(fruits);
console.log(fruits[1]); // shows the second one in the array

fruits[3] = 'grapes';
console.log(fruits[3]);

fruits.push('strawberries') //adds to the end of the array
fruits.unshift('cherries') //adds to the beginning of the array
fruits.pop(); //deletes the last on the array
console.log(fruits);

console.log(Array.isArray(fruits)); // tells us if fruits is an array by calling the isArray method

console.log(fruits.indexOf('oranges')); //gives us the index of the value within the array.

//OBJECT LITERALS
const person = {
    firstName: 'Norman',
    lastName: 'Grundy',
    age: 22,
    hobbies: ['music', 'movies', 'sports'],
    address: { //object within an object (embedded objects)
        street: '50 main st',
        city: 'Bath',
        country: 'UK'
    }
}

console.log(person.hobbies[1]);
console.log(person.address.city)

const{firstName, lastName, address:{city}} = person; // pulling firstname & lastname properties out of person object
console.log(firstName + ' ' + city);

person.email = 'norman@gmail.com'; // you can directly add properties aswell.

//Creating an array of objects

const todos = [
    {
        id: 1,
        text: 'Take out rubbish',
        isDone: true,

    },

    {
        id: 2,
        text: 'Meeting with boss',
        isDone: true,

    },

    {
        id: 3,
        text: 'Dentist appointment',
        isDone: false,

    }
];

console.log(todos[1].text); // Printed 'Meeting with boss'

//JSON is a data format used in full stack development, we use it to get ready to send to a server for use for APIs perhaps
//let's convert this to JSON format

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For loops
for(let i = 0; i < 50; i++){
    console.log(`For loop number ${i}`);
}

//While loop
let i = 0;

while(i<10){
    console.log(`While loop number: ${i}`);
    i++;
}

//using it to show all text property values in the array
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

//better way of doing it
for(let todo of todos){ //notice the todo and todos different
    console.log(todo.text);
}

//High order array methods to do any kind of iteration with arrays
//forEach, map, filter

//forEach loops through
//map creates a new array from an array
//filter creates a new array based on a condition
todos.forEach(function(todo){//like a for loop but for 'each' value
    console.log(todo.text);
}); // spits out all text from array

// map
const todoText = todos.map(function(todo){ //map returns an array so assign variable todoText to it
    return todo.text;
});

console.log(todoText + ' this is map');


// filter
const todoDone = todos.filter(function(todo){ //
    return todo.isDone === true;
});

console.log(todoDone , ' this is filter'); // using , nstead of + concatenation because we are outputting an array not a string. for a string + is fine.

// filter and map
const todoDoneMulti = todos.filter(function(todo){
    return todo.isDone === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoDoneMulti);

//CONDITIONALS
//double equal will not check data type, triple equal matches data type.
/*
const k = 4;
const m = 10;

if(k == 10){
    console.log('k is 10');
}
else if(k > 10){
    console.log('k is greater than 10');
}
else{
    console.log('k is less than 10');
}
*/

// if you want to do OR then it's ||, && for AND
const c = 4;
const d = 11;

if(c > 5 || d > 10){
    console.log('c is more than 5 or d is more than 10');
}

//using a turnary operator instead of using if statetment
// the ? operator means THEN, : means ELSE

const e = 9;

//const colour = e > 10 ? 'red' : 'blue';

const colour = 'green';

console.log(colour);

switch(colour){
    case 'red':
        console.log('colour is red');
        break;
    
    case 'blue':
        console.log('colour is blue');
        break;
    default:
        console.log('colour is not red or blue');
        break;
}

//FUNCTIONS
function addNums(num1 = 1, num2 = 4){
    console.log(num1 + num2);
}

addNums(5,4);
addNums();//if we do this we get NaN which means Not a Number, unless we specified default value when we made the function above.

//better way to do it is this:
function togetherNums(number1 = 2, number2 = 3){
    return number1 + number2;
}

console.log(togetherNums(12, 15));

//to turn it to an arrow function:
const togetherNumbers = (number1 = 2, number2 = 3) => {
    return number1 + number2;
}

console.log(togetherNumbers(9,9));

//even better
const garbage = (number1 = 2, number2 = 3) => number1 + number2;

console.log(garbage(21,49));