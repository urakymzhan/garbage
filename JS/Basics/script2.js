

var isHuman = true;
var value = null;

if(isHuman) { 
    console.log('Yes human');
}

if(value === null) { // correct
    console.log('its null')
}
if(!value) { // correct
    console.log('its also null')
}

var a = true, b = false;
if(a && b) {
    console.log(true)
} 
if(a || b) {
    console.log(true)
}
// activity 2
var temp = 50;

if (temp >= 80){
console.log("wear a short  and  a hat");
}
else if(temp > 60){
    console.log("wear a short");    
} else if(temp < 0){
    console.log("stay inside");    
}
else {
    console.log("wear whatever you want");
}

// var questions = prompt('What is the number ?')
// console.log(prompt())

// ACTIVITY 3
// document.write(
//     prompt("Did you eat steak?") === "yes"
//     ? "Here’s a Steak!"
//     : "Here’s a Tofu Stir-Fry!"
//     );
// let ans = window.prompt("Did you eat steak?");
// if(ans === 'yes') document.write('Steak')
// else document.write('Stir')

// activity 3
for(var i=11; i < 44; i+=3) {
    console.log(i);
}
for(var i=1; i <= 12; i++) {
    console.log('9 x ' + i + " = " + 9 * i); 
}

let temp2 = 60;

switch(temp2) {
    case 60: {
        console.log('60')
    }
    default: {
        console.log('Default')
    }
}


// Array
var arr = []; 
// var arr2 = new Array(10);
// var arr2 = new Array(10,10,10, true, "Hey");
var arr2 = new Array();
console.log(arr2.length)



// push()
console.log(arr)
arr.push('One');
console.log(arr)
arr.push('Two');
console.log(arr)
let lastElement = arr.pop();
console.log(lastElement)
console.log(arr)
arr.push('Three');
console.log(arr)


var str = "Hello, World, my, fried";
var ans2 = str.split(','); // to array
let ans3 = ans2.join(''); // to string

console.log(ans2); // array
console.log(ans3); // string

// for of for arrays
for(var el of arr2) { 
    console.log()
}

// Object
var person = {};
var people = new Object({ name: "John", "d-d": 100});

console.log(person)
people.age = 10; // add
people['country'] = 'USA'; // add
console.log(people)
console.log(people['age'])
console.log(people.age)
console.log(people.country)
console.log(people.length);

// p.age => Error p doesn't have age attribute
// p['age'] => undefined
// getNames();
// MAP
const map = new Map();
map.set('age', 10);
console.log(map);
console.log(map.get('age'));

// for in for object
for(var key in people) { 
    console.log(key, people[key])
}
// getNames();
// for of for strings
let sent = 'cdcd cd cd cd cd';
for(var char of sent) {
    console.log(char)
}


let array2 = [10, true, {name: 'Joe', age: 33 }, null]

for(var el of array2) { 
    if(typeof el === 'object' && el !== null) {
        console.log(el['name'])
    }
}
// getNames();
let obj = {name: 'Joe', age: 33 };
delete obj.age;
// obj.age = null;
console.log(obj)

// FUNCTIONS

getNames(); // Names
// getNames2(); // Error

// Declaration
function getNames(arg1, arg2) {
    console.log('Names', arg1, arg2)
}

// Expression
var getNames2 = function() {
    console.log('Names 2')
}

getNames(10, 'Something');
getNames2();

function sum(arg1, arg2) {
    // let sumRes = 
    return 'sum: ', +arg1 + +arg2;
}

console.log(sum('10.4', '15.9'));

var h = 9;
let hStr = ''+h;
let hStr2 = h.toString();
console.log(typeof hStr);
console.log(hStr);
console.log(hStr2);

var global = 89; //  global
var initial;

function localFun() {
    var local = 98;
    initial  = 10;
    console.log(local) 
    
    return function x() {
        console.log(local)
        console.log(global)
    }
}
let x = localFun();

x();

console.log(initial); // 10
// console.log(local) // Error

// block scope


