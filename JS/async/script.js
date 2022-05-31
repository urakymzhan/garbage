


// used to mimic async code

// console.log('Hi!')
// setTimeout(() => {
//     console.log('Async code!')
// }, 0);
// console.log('Bye!')

// // Callbacks


// // async
// // const data = ajax('https://google.com');
// // console.log(data); // undefined

// // ajax('https://google.com', function(data) {
// //     console.log(data) // data
// // })


// // btn.addEventListener('click', (event) => {
// //     // do something with event
// // })


// function downloadImage(url, nextCallback) {
//     setTimeout(() => {
//         console.log(`Downloading ${url} ...`);
//         nextCallback(url);
//     }, 3000);
// }


// // const url1 = 'https://www.someurl.net/1.jpg';
// // const url2 = 'https://www.someurl.net/2.jpg';


// downloadImage(url1,function(picture){
//     console.log(`Processing ${picture}`);
//     // download the second picture
//     downloadImage(url2,function(picture){
//         console.log(`Processing ${picture}`);
//         // ... goes on
//     });
// });

// // 1. way
// setTimeout(() => {
//     document.getElementById('data').textContent = 'Downloading data...'
// }, 1000)
// setTimeout(() => {
//     document.getElementById('data').textContent += 'Downloading data...'
// }, 2000)
// setTimeout(() => {
//     document.getElementById('data').textContent += 'Downloading data...'
// }, 3000)
// setTimeout(() => {
//     document.getElementById('data').textContent += 'Downloading data...'
// }, 4000)

// // 2.way

// setTimeout(() => {
//     document.getElementById('data').textContent = 'Downloading data...'
//     setTimeout(() => {
//         document.getElementById('data').textContent += 'Downloading data...'
//         setTimeout(() => {
//             document.getElementById('data').textContent += 'Downloading data...'
//             setTimeout(() => {
//                 document.getElementByxId('data').textContent += 'Downloading data...'
//                 // Callback hell
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// // Handling Error
// function downloadImage(url, nextCallback, failure) {
//     const rndNum = Math.floor(Math.random() * 10);
  
//       setTimeout(() => {
//           // simulate this number if not getting answer
//           if(rndNum > 5) {
//             // in real life you have a script to download
//             console.log(`Downloading ${url} ...`); 
//             // process the picture once it is completed
//             nextCallback(url);
//           } else {
//             failure('Error occured!')
//           } 
//       }, 3000);
//   }

  
//   const url1 = 'https://www.someurl.net/1.jpg';
//   const url2 = 'https://www.someurl.net/2.jpg';
//   const url3 = 'https://www.someurl.net/3.jpg';
  
//   downloadImage(url1,
//     function() {
//         console.log(`Processing ${url1}`);
//         downloadImage(url2,
//           function() {
//             console.log(`Processing ${url2}`);
//             downloadImage(url3,
//               function() {
//                 console.log(`Processing ${url3}`);
//                 // HELL
//               },
//               function(err){
//                 console.log(err)
//               })
//           },
//           function(err){
//             console.log(err)
//           })
//     },
//     function(err){
//       console.log(err)
//   });



//   const url1 = 'https://www.someurl.net/1.jpg';
//   const url2 = 'https://www.someurl.net/2.jpg';
//   const url3 = 'https://www.someurl.net/3.jpg';

//   // Promise
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Some data');
//         // reject('Some error')
//     }, 3000)  
//   })

//   console.log(promise);

//   promise.then((data) => console.log(data));
//   promise.catch(err => console.log(err))


//   function downloadImage(url) {
//     // Promise
//     const rndNum = Math.floor(Math.random() * 10);

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // simulate this number if not getting answer
//             if(rndNum > 0) {
//               // in real life you have a script to download
//               console.log(`Downloading ${url} ...`); 
//               // process the picture once it is completed
//               resolve(url);
//             } else {
//                 reject('Error occured!')
//             } 
//         }, 3000);
//     })
// }

// handle Promise

// downloadImage(url1).then((picture) => {
//     console.log(`Processing ${picture}`);
//     return downloadImage(url2).then((picture) => {
//         console.log(`Processing ${picture}`);
//     })
// })

// downloadImage(url1)
// .then((picture) => {
//     console.log(`Processing ${picture}`);
//     return downloadImage(url2)
// }).then((picture) => {
//     console.log(`Processing ${picture}`);
//     return downloadImage(url3)
// }).then((picture) => {
//     console.log(`Processing ${picture}`);
// }).catch(err => {
//     console.log(err)
// })

// Async/Await

// async function getData() {
//     const data = await fetch('url')
//     .then(res => res.json())
// }

// IIFE

// async function getPictures() {
//     try {
//         const pic1 = await downloadImage(url1);
//         console.log(`Processing ${pic1}`);
//         const pic2 = await downloadImage(url2);
//         console.log(`Processing ${pic2}`);
//         const pic3 = await downloadImage(url3);
//         console.log(`Processing ${pic3}`);
//     } catch(err) {
//         console.log(err);
//     }
// }


// Promise.all()

// async function getPictures() {
//     try {
//         const pic1 = downloadImage(url1);
//         const pic2 = downloadImage(url2);
//         const pic3 = downloadImage(url3);
        
//         const pics = await Promise.all([pic1, pic2, pic3]);
//         const urls = [url1, url2, url3];

//         pics.forEach((pic, i) => {
//             console.log(pic);
//             console.log(`Processing ${urls[i]}`);
//         })
//     } catch(err) {
//         console.log(err);
//     }
// }
// getPictures();

/**
 * 
 * Fetch users
 * Fetch posts of that user
 * 
 */

let container = document.getElementById('data');

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json()) // specific to fetch
.then(data => { 
    // do logic here
    // NOTE: Very long solution
    // Better use reusable functuons!
    let users = [];

    data.forEach(obj => {
        let user = {};
        user.name = obj.name;
        user.id = obj.id;
        user.email = obj.email;
        user.posts = [];
        users.push(user);
    })

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            posts.forEach(post => {
                users.forEach(user => {
                    if(user.id === post.userId) {
                        user.posts.push(post.body)
                    }
                })
            })

            users.forEach(user => {
                let postDiv = document.createElement('div');
                user.posts.forEach((post, i) => {
                    let postEl = document.createElement('p');
                    const textNode = document.createTextNode(`PostId: ${i} ${post}`);
                    postEl.appendChild(textNode);
                    postDiv.append(postEl);
                    postEl.style.padding = '4px';   
                    postEl.style.color = 'gray';
                })
                let userEl = document.createElement('h4');
                const textNode = document.createTextNode(`${user.id}: ${user.name}/${user.email}`);
                userEl.style.color = 'darkgreen';
                userEl.style.borderBottom = '4px solid'
                userEl.appendChild(textNode);
                container.append(userEl)
                container.append(postDiv);
            })
    
        })
        .catch(err => console.log(err))

})
.catch(err => console.log(err));