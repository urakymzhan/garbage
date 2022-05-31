const container = document.getElementById('links');
const links = document.getElementsByClassName('link');

// array

// Array.from(links).forEach((link) => {
//     // each i want to give a listener
//     link.addEventListener('click', (event) => {
//         // console.log('Go to link!');
//         console.log(event.target)
//     })
// })

// event delegation way
// container.addEventListener('click', (event) => {
//     // event.stopPropagation();
//     if(event.target.classList.contains('link')) {
//         console.log(event.target);
//     }
// })


/* HOISTING */

// console.log(a) // undefined
// console.log(b) // Reference error
// console.log(c) // Reference error
// var zyx;

// declaration
var a;
// let b;
// initializaiton
// var a = 10;
let b = 11;
const c = 12;
// = undefined;

xyz();  // works
// zyx(); // not a function
function xyz() {
    // console.log('xyz');
}
// variable
var zyx = function() {
    // hoisted here
    let d = 10;
    // console.log('zyx');
}

// SCOPES

// global => accessible everywhere
// block/functional scope => only accessible inside block/function
// local => only accessible local

// CLOSURES
// a way inner function acceses outer functons properties

const counter = function () {
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        decrement: function () {
            count--;
        },
        get_value: function (){
            return count;
        }
    }
}
let cc = counter();
// console.log(cc.get_value()); // 0
// console.log(cc.increment());
// console.log(cc.get_value()); // 1
// console.log(cc.increment());
// console.log(cc.get_value()); // 2


// IIFE
// Pollution
function get_nums() {
    let num = 10;
    // console.log(num);
}
get_nums();

(function(a,b) {
    let num = 10;
    // console.log(num, a, b);
})(8,9)

// Task1
function get_sum() {
    let num = 10;
    let num2 = 20;
    return '40';
}
// console.log(get_sum());


function sum(a, a, c) { // !!! syntax error
    // 'use strict';
    return a + a + c; // wrong if this code ran
  }
  
// console.log(sum(5,5,10));
// console.log(g);
// g = 'text';

// 'use strict';

// console.log(g);
// g = 'text';


/* THIS */


// [1,2,3].forEach((el) => console.log(el));

// this of forEach is Array(Object)


// Global scope
// console.log(this); // window

const person = {
    name: "Joe",
    age: 20,
    hobbies: ['gym', 'code', 'swim'],
    details: function () {
        console.log(this);
    },
    // get_hobbies: function() {
    //     this.hobbies.forEach(function (hobby) {
    //         console.log('this.name', this) // this => window
    //         console.log(`${this.name} hobbies are: ${hobby}`)
    //     })
    // }
    get_hobbies: function() {
        this.hobbies.forEach((hobby) => {
            console.log('this.name', this) // this => parent this
            console.log(`${this.name} hobbies are: ${hobby}`)
        })
    }
}

person.details(); // this => person obj
person.get_hobbies();

// Arrow => normal function
// Arrow doesn't have its own this
// Normal function has its own this => window


/*
Person
    name
    details
    get_hobbies
        function =>
*/


function Person(title) {
    console.log(this); // window
    this.title = title;
}

const burak = new Person('Test Engineer');
// console.log(Person('title'));
console.log(burak);


// Call

const honda = {
    brand: 'honda',
}

const audi = {
    brand: 'audi',
}

function get_brand (a,b,c) { 
    // console.log(arr[0]);
    console.log(a,b, c, this.brand);
}

// call
get_brand.call(honda, 1,2,3); // honda
get_brand.call(audi, 1,2,3); // audi

// apply
let arg = [4,5,6];
get_brand.apply(honda, arg); // honda
get_brand.apply(audi, arg); // audi


// BIND
const getHondaDetails = get_brand.bind(honda, 7,7,7); // works
const getAudiDetails = get_brand.bind(audi, 8,8,8); // works

getAudiDetails();
getHondaDetails();

// Currying
function getSum(a,b,c) {
    return a+b+c;
}

function getSumCurry(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}

console.log(getSum(1,2,3)) // 6
console.log(getSumCurry(1)(2)(3)) // 6



// function log(type, msg) {
//     if (type == "error")
//       console.error(msg);
//     if (type == "warn")
//       console.warn(msg);
//     if (type == "info")
//       console.info(msg);
//   }

// log = curry(log)
const log = function(type) {
    if (type == "error") {
        return function() {
            console.error('error');
        }
    } else if(type == "warn"){
        return function() {
            console.warn('warn');
        }
    } else {
        return function() {
            console.info('info');
        }
     }
}
const error = log("error")
const warn = log("warn")
const info = log("info")

error();
warn();
info();




