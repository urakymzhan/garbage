// Pure node setup example without ExpressJS
// But we usually use Node with Express

// const http = require('http'); // built-in package from Node

// const hostname = '127.0.0.1';
// const port = 5000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World\n')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })

/* ---------------------------------------------------------------- */
// App using ExpressJS
const express = require('express');
const { engine } = require('express-handlebars');

// Create an app
const app = express();

// Configure handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Sample data
const PageDetails = { title: 'Welcome Home', menu: ['Home', 'About', 'Contact']};

// Routes
app.get('/', (req, res) => {
    // res.send('Hello World'); // send text
    // res.send('<h1>Hello World</h1>'); // send html 
    // res.json({ name: 'Burak'}) // send object
    res.render('home', PageDetails); // send hbs
})

// Port
const PORT = 5000;

// Listen app
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})