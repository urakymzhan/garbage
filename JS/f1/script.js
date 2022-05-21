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

console.log(a) // undefined
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
    console.log('xyz');
}
// variable
var zyx = function() {
    // hoisted here
    let d = 10;
    console.log('zyx');
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

console.log(counter().get_value()); // 0
console.log(counter().increment());
console.log(counter().get_value()); // 1
console.log(counter().increment());
console.log(counter().get_value()); // 2


// IIFE
// Pollution
function get_nums() {
    let num = 10;
    console.log(num);
}
get_nums();

(function(a,b) {
    let num = 10;
    console.log(num, a, b);
})(8,9)

// Task1
function get_sum() {
    let num = 10;
    let num2 = 20;
    return '40';
}
console.log(get_sum());




function sum(a, a, c) { // !!! syntax error
    // 'use strict';
    return a + a + c; // wrong if this code ran
  }
  
  console.log(sum(5,5,10));

// console.log(g);
// g = 'text';

alert(10)
// 'use strict';

// console.log(g);
// g = 'text';









