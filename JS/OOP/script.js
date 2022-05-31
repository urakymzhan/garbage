// import add  from './helper.js'; // 
// import {substract, API}  from './helper.js'; // 
const { API } = require('./helper.js');

import * as Helper from './helper.js';

console.log(Helper.API_2) // und
console.log(Helper.substract(4,5)); // -1
console.log(Helper.substract(4,5)); // -1


/* Constructor function */
function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
} 
// add to prototype
Cat.prototype.getDetails = function () {
    console.log(`${this.name} is a ${this.breed}`);
};


function RussianBlue () {

}
// RussianBlue.prototype = Object.create(Cat.prototype);

const cat = new Cat('Leo', 'Bengal');
console.log(cat);
cat.getDetails();
// console.log(cat.__proto__.__proto__); 
// arr -> Array -> Object


/* Class */
class CCat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    getDetails() {
        console.log(`${this.name} is a ${this.breed}`);
    }
}

const ccat = new CCat('Leo', 'Bengal');
console.log(ccat);
ccat.getDetails();