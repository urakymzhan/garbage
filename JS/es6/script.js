// LET
// var a; //  declare

console.log(a); // undefined

var a = 10; // assign
// let and const

// let  => var
// const => constant

// global scope
if (true) {
  // block scope
  // top
  // let d;
  var b = 12;
  let d = 40; // reassign
  f = 8; // default

  console.log(d); // 40
}
function myFun() {
  // top
  // var c;
  // function scope
  var c = 30; // reassign
}

console.log(a); // 10
console.log(b); // 12
// console.log(c) // not defined error
// console.log(d) // not defined error
console.log(f); // not defined error

let g = 10;
g = 50; // reassingment possible
console.log(g);

// CONST

const myFirstVariableWtithConst = 10;
// myFirstVariableWtithConst  = 90;
// console.log(myFirstVariableWtithConst); // Assignment to constant variable.

if (true) {
  // block scope
  // top
  // const t;
  const t = 80;
  console.log(t); // 40
}
// console.log(t); // ReferenceError: t is not defined

// activity
const statuses = [
  { code: "OK", response: "Request successful" },
  { code: "FAILED", response: "There was an error with your request" },
  { code: "PENDING", response: "Your reqeust is still pending" },
];
let message = "";
const currentCode = "OK";

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
    console.log(message);
  }
}
// Object type
// String, number
/// const
statuses[0]["code"] = "Error";
statuses[1].code = "FAILED_222";
// Object inside Array

console.log(statuses);

let str = "cdcd";
let str2 = str; // stored in new memory

str2 = "tyiyib";
console.log(str); // untoched
console.log(str2);

let obj = { name: "Burak" };
// let obj2 = Object.create(obj) // new
let obj2 = obj; // reference to old object
obj2.name = "Salih";
console.log(obj); // Salih
console.log(obj2); // Salih

// Arrays
// Do not modify original
// sorting will modify

// Template Literals
const student = "John";
const teacher = "Mrs.Elany";
let message2 = student + " is " + teacher + "'s favorite student.";
console.log(message2);
let message3 = `${student} is ${teacher}'s favorite student.`;
console.log(message3);

// activity
let device_id = 25;
let guid = 654321;
const data = "{device_id : " + device_id + ", " + "guid: " + guid + "}";
const data2 = `{device_id : ${device_id}, guid: ${guid}}`;
console.log(data, "\n", data2);

// Arrow functions
function XYZ() {
  return "normal";
}
const XYZ_NORMAL = function () {
  return "expression";
};
const XYZ_ARROW = () => "arrow function";

const XYZ_ARROW_2 = (arg) => arg;

XYZ();
XYZ_ARROW();

let arr3 = [1, 2, 3, 4];
arr3.forEach(cb);
// cb will be called for each element inside array
// cb is a callback function
// outsource
function cb(num) {
  console.log(num);
}
// normal function
arr3.forEach(function (num) {
  console.log(num);
});
// arrow function
arr3.forEach((num) => {
  console.log(num);
});

// your own filter implementation
const fooFilter = (checkElement) => {
  const returnArr = [];
  if (checkElement > 2) {
    returnArr.push(checkElement);
  }
  return returnArr;
};

let res = arr3.filter(fooFilter);
console.log(res);

// activity
//  v1
const getExamples = () => {
  return fetch("https://example.com/")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
    });
};
//  v2
const getExamples2 = () => {
    return fetch("https://example.com/")
      .then((response) => response.json())
      .then((response) => response.data)
      .then((data) => console.log(data));
  };


let country = 'USA';
// let obj3 = {country: country};
let obj3 = {country, id: 1}; // {country: country};
console.log(obj3);


const person = {name: 'Mark', lastName: 'Twain', age: 40};
const {fname, lastName, age } = person; // destructure
// const name = person.name;
console.log(fname, lastName, age); // Mark Twain
console.log(person.name, person.lastName, person.age) // Mark
// console.log(person.name, person.lastName, person.age) // Mark
// console.log(person.name, person.lastName, person.age) // Mark


const people = [
    {name: 'Mark', lastName: 'Twain', age: 40},
    {name: 'Joe', lastName: 'Doe', age: 28}
]

for(let i=0; i < people.length; i++) {
    // let pers = people[i];
    const {name} = people[i]; // pers;
    console.log(name);
}
// select Name as FName
// const {name }  = people[0];
// const {name: fnames }  = people[1];
// console.log(name, fnames)


// default

function getName(n="Joeeee") { // if name not provided use Joe
    console.log(n);
}

getName("Burak")

// REST Operator
const getSum = (n1, ...nums) => { // n1, n2, n3
    console.log('first number', n1);
    console.log('nums', nums);
    // let sum = 0;
    // return n1+n2+n3+n4;
}

console.log(getSum(1,2,4,5,6,7));

// concat arr2 to arr1
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let longArr = [...arr1, ...arr2];
console.log(longArr)


function avg(){
    let len = arguments.length;
    let sum = 0;

    for(let i=0; i < len; i++) {
        sum += arguments[i];
    }
    return sum / len;
}
console.log(avg(2,6)) // 4
console.log(avg(2, 3, 3, 5, 7, 10)) // 5


function average(...nums) {
    let sum = 0;
    for(const num of nums) sum += num;
    return sum / nums.length;
}
console.log(average(1, 2, 3, 4, 5));
console.log(average(2,6)) // 4
console.log(average(2, 3, 3, 5, 7, 10)) // 5