/* Routing refers to the definition of application end points (URLs) and how they rspond to client request. for an introduction to routing */

var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage

// GET method route
app.get('/' , function(req, res){
    res.send('Hello world');
});

// post method route
app.post('/' , function(req, res){
    res.send('POST request to the homepage');
})

// there is a special routing method, app.all
app.all('/secret' , function(req, res, next) {
    res.send('sceret section');
    console.log("Accessing the secret section");
    next();// pass control to the next handler
});


// This route path will match 

app.get('/ab?cd', function(req, res) {
    res.send('ab?cd');
     res.send('Match the link');
    console.log('Match the link');
})

// This route path will match abcd, abbcd, abbbcd, and so on.
app.get('/ab+cd' , function(req, res) {
    res.send('ab+cd');
});

// This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get('/ab*cd', function(req, res) {
    res.send('ab*cd');
});


// This route path will match /abe and /abcde.
app.get('ab/(cd)?e', function(req, res) {
    res.send('ab(ad)?e');
})


// This route path will match anything with an “a” in the route name.
app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})

/**
 * Route path: /users/:userId/books/:bookId
 * Request URL : http://localhost:3000/users/30/books/8989
 * req.params: {"userId" : "30", "bookId" : "8989"}
 */
app.get('/users/:userId/books/:bookId', function(req, res){
    res.send(req.params);
});

// Since the hyphen (-) and the dot (.) are interpreted literally, they can be used along with route parameters for useful purposes.

/**
 * Route path: /flights/:from-:to
 * Request URL: http://localhost:3000/flights/LAX-SFO
 * req.params: { "from": "LAX", "to": "SFO" }
 * 
 **/

/**
 * Route path: /plantae/:genus.:species
 * Request URL: http://localhost:3000/plantae/Prunus.persica
 * req.params: { "genus": "Prunus", "species": "persica" }
 */



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})