/* Number Methods */

// toString
let toStr = 10;
console.log(toStr.toString())
console.log(typeof toStr.toString())

// toFixed
let unfixed = 99.656;
console.log(unfixed.toFixed(2));
console.log(unfixed.toFixed(1));
console.log(unfixed.toFixed(9));
// console.log(unfixed.toFixed(0)); // 100

// toPrecision();
let unprecised = 9.656;
console.log(unprecised.toPrecision());
console.log(unprecised.toPrecision(2));
console.log(unprecised.toPrecision(3));
console.log(unprecised.toPrecision(4));
console.log(unprecised.toPrecision(5));


let num = 10;
let num2 = 10.33;
// Number
console.log(Number(num)) // 10
console.log(Number(num2)) // 10.33

// parseInt
console.log(Number.parseInt(num)) // 10
console.log(Number.parseInt(num2)) // 10
console.log(parseInt(num2)) // 10

// parseFloat
console.log(parseFloat(num)) // 10
console.log(parseFloat(num2)) // 10.33

// Find max value of array
let nums = [4,3,5,7];
// let max = Math.max(...nums);
// console.log(max) // 7

let max = Number.MIN_VALUE; // 
// let min = -Infinity;
for(let i=0; i < nums.length; i++) {
  if(nums[i] > max) {
    max = nums[i]; // update
  }
}
console.log(max); // 7
// console.log('cdc' / 2); // NaN 

let mix = [4,'cdcd',8,'vfvg'];

for(let value of mix) {
  // isNaN()
  // if(isNaN(value)) {
  //   // do something else with string values
  //   continue;
  // } else {
  //   console.log(value / 2); // NaN 
  // }
  // shorter way
  if(!isNaN(value)) { // if number
    console.log(value / 2); // NaN 
  }
}

/* STRING */
let str = 'Hello World Hello';
console.log(str.indexOf('Hello')); // 0
console.log(str.lastIndexOf('Hello')); // 12

console.log(str.replace('Hello', 'Hi')); // Hi World Hello
console.log(str.replaceAll('Hello', 'Hi')); // Hi World Hi

let he = 'hello';
let wo = 'world!';
console.log(he.concat(" ", wo)); // 

console.log(he.charAt(0)) // h
console.log(he.charAt(1)) // e
console.log(he.charCodeAt(1)) // 101 ASCI Value
// Calucalte sum of number without using + - / * 
// Bit Operator

let txt = 'hery | b | c d esas';
console.log(txt.split(""))
console.log(txt.split("|"))
console.log(txt.split(" "))

let txt2 = "Apple Kiwi Orange";
// slice
console.log(txt2.slice(0, 5)); // Apple
console.log(txt2.slice(-6, -1)); // Orang

// substring
console.log(txt2.substring(0, 5)); // Apple
console.log(txt2.substring(-6, -1)); // 

// substr - depracated
console.log(txt2.substr(0, 8)); //  end is how many 

/* ARRAY */

console.log(typeof mix) // object
console.log(Array.isArray(mix)) // true

let fruits = ["Apple", "Kiwi", "Orange"];

console.log(fruits.join(" ")); 
console.log(fruits.join("|")); 
console.log(fruits.join("-")); 
console.log(fruits.join("~")); 

fruits.push('Banana');
console.log(fruits)
fruits.pop();
console.log(fruits)

fruits.unshift('Strawbery'); // adds to beggining
console.log(fruits)
fruits.shift(); // removes from beggining
console.log(fruits)

// splice -> modifies your original array
// remove
let splicedArray = fruits.splice(1, 1, "Peach"); // Kiwi
// fruits.splice(1, 1, "Peach") // idx, #, what to put
console.log("s", splicedArray) // Kiwi -> Peach
fruits.splice(1, 0, "XYZ") // idx, #, what to put
// concat
console.log(fruits) // just add XYZ

// slice  - doesn't modify your original array
// returns the new array
let slicedArray = fruits.slice(0, 1)
console.log(slicedArray);



let fruits2 = ["Apple", "Kiwi", "Orange", "Ananas"];

// forEach
fruits2.forEach((fruit, idx) => console.log(idx, fruit))

// Reverse
console.log(fruits2.reverse());

// Some
let isKiwi = fruits2.some((fruit) => {
  if(fruit === 'Kiwi') {
    return true;
  } 
})
let isKiwi2 = fruits2.some((fruit) => fruit === 'Kiwi');

console.log(isKiwi); // true
console.log(isKiwi2); // true

// sort
fruits2.sort();
console.log(fruits2);

let ages = [45, 80, 12, 54, 10];

ages.sort((x, y) => x-y); // sorting in asc
console.log(ages);
ages.sort((x, y) => y-x); // sorting in desc
console.log(ages);

let people = [
  {name: 'Joe', age: 45},
  {name: 'Burak', age: 10},
  {name: 'Hamza', age: 80},
  {name: 'Marie', age: 6},
  {name: 'Adam', age: 6},
  {name: 'Anna', age: 6},
];
// sort based on age
people.sort((x, y) => x.age - y.age);
console.log(people);

// map
let doubleAges = ages.map((age) => age * 2);
console.log(doubleAges)
// other way
let dbl = [];
ages.forEach((age) => dbl.push(age*2));
console.log(dbl)

// filter - return new array
let people_starts_with_a = people.filter((person) => {
  return person.name.startsWith('A');
})
let teens = ages.filter((age) => age < 18)

console.log(people_starts_with_a)
console.log(teens)

// reduce
// get sum of ages
let sum_of_ages = 0;
ages.forEach((age) => sum_of_ages += age);
console.log(sum_of_ages); // 201

let sum_of_ages2 = ages.reduce((acc, age) => {
  return acc + age;
}, 0);
let sum_of_ages3 = ages.reduce((sum, age) => sum + age, 0);
// sum holds/remembers the previous sum

console.log(sum_of_ages2); // 201
console.log(sum_of_ages3); // 201

let person = { name: 'Joe' };
// inheriting
let me = Object.create(person);

console.log(person);
console.log(me.name); // Joe 
me.name = 'Ulan';
console.log(me.name); // Ulan


// interface/cass Person
// inherit some properties of Person to Me


const myCar = {
  model: 'chevy',
  type: 'sport',
  isAvailable: true,
  showDetails() {
      console.log(`My car model is ${this.model}, type is ${this.type}`);
  },
};

myCar.showDetails();

// Use Object.create to pass properties
const yourCar = Object.create(myCar);
console.log('yourCar: ', yourCar);
yourCar.model = 'some nicer model';

yourCar.showDetails();


// Object.keys
const car = {
  model: 'chevy',
  type: 'sport',
  isAvailable: true,
  price: 14000
};
let car_keys = Object.keys(car);
let car_values = Object.values(car);
let car_entries = Object.entries(car);
console.log(car_keys)
console.log(car_values)
console.log(car_entries);

for(let key in car) {
  console.log(key, car[key]);
}

for(let key of Object.keys(car)) {
  console.log(key);
}
for(let value of Object.values(car)) {
  console.log(value);
}
for(let [key, value] of Object.entries(car)) {
  // console key and value
  // let key = entries[0];
  // let value = entries[1];
  console.log(key, value);
}

// freeze
Object.freeze(car);

car.mode = 'BMW';
console.log(car) // chevy

if(Object.isFrozen(car)) {
  console.log("Object is frozen, can't modify")
} else {
  car.mode = 'BMW';
}