

/* Access a DOM */

// ID
const title_id = document.getElementById('title');
console.log(title_id);
// Class - plural
const title_class = document.getElementsByClassName('title');
console.log(title_class);
// get each class element
for(let i=0; i < title_class.length; i++) {
    console.log(title_class[i])
}
// forEach
Array.from(title_class).forEach((element) => {
    console.log(element)
})
// work
let arr = [...title_class];
console.log(arr);

// Tag Name
const section  = document.getElementsByTagName('section')
console.log(section); // collection
console.log(section[0]); // element

// querySelector
const title_query = document.querySelector('#title'); // id
const title_query_2 = document.querySelector('.title'); // class
const title_query_3 = document.querySelector('section'); // tag

console.log(title_query);
console.log(title_query_2);
console.log(title_query_3);

// querySelectorAll
const fruits = document.querySelectorAll('ul li');
console.log(fruits);
// forEach works
fruits.forEach((fruit) => console.log(fruit))

const checkbox = document.querySelector('input[type="checkbox"]');
console.log(checkbox);

const apple = document.getElementById('apple');
console.log(apple.src);
console.log(apple.getAttribute('src'));
console.log(apple.setAttribute('src', '#')); // works

/* STYLING */
const body = document.getElementsByTagName('body')[0];
console.log(body.style); // 
body.style.backgroundColor = 'lightgray';
body.style.color = 'darkgreen';
fruits[0].style.border = '2px solid black';


const container = document.getElementsByClassName('container')[0];
const container_el = document.getElementsByClassName('class1')[0];
console.log(container.className)
console.log(container_el.className)

container_el.className += ' class4';
container_el.classList.add('class5')
container_el.classList.remove('class1');
console.log(container_el.className);

// innerHTML
container.innerHTML += "<p class='class1 class2 class3'>Class element 3</p>"

console.log(container.textContent);
console.log(container.innerText); 
console.log(container.innerHTML); 

const footer = document.createElement('footer'); // new el
// let text = document.createTextNode('Footer!');
// console.log(text);
footer.innerText = 'Footer @2020';

body.append(footer);

const btn = document.getElementById('btn');

const changeBColor = (event) => {
    // whatever
    console.log(event.target)
    event.target.style.backgroundColor = 'pink';
}
btn.addEventListener('click', changeBColor);


const input = document.querySelector('input[type="text"]');

// input.addEventListener('change', (event) => {
//     console.log(event.target)
// })
input.addEventListener('input', (event) => {
    console.log(event.target.value)
})

// KEYCODES
body.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) {
        // make fullscreen
        console.log("Enter clicked")
    }
})

// ------
let hover = input.addEventListener('mouseover', (event) => {
    console.log(event.target.value)
})
input.addEventListener('mouseout', () => {
    removeEventListener(hover);
})
input.removeEventListener('mouseover', hover);
// ------


console.log(body.children)

let root = body.children;
for(let i=0; i < root.length; i++) {
    console.log(typeof root[i].classList) // string
    if(root[i].classList.contains('title')) {
        console.log(root[i])
    }
}

let n = 'ABC';
console.log(n.includes('A')) // includes


/**
 * DOM
 * .contains -> cdcdcdd
 * .add -> cdcdcd
 * 
 */



console.log(fruits);
console.log(fruits[0].parentNode);
console.log(fruits[0].nextSibling.nextSibling);
console.log(fruits[0].nextElementSibling);
console.log(fruits[0].parentNode.childNodes); // Nodelist
console.log(fruits[0].parentNode.children); // HTMLCollection


checkbox.addEventListener('click', (e) => {
    e.preventDefault();
})

// 1 Idea

