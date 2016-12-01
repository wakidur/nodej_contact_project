var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL 
var url = 'mongodb://localhost:3000/express_practice';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 
  db.close();
});

app.get('/', function( req, res ){
    res.send("hello world");
});
/*
app.post('/', function( req, res ){
     res.send("Got a post request");
});

app.put('/user', function( req, res ) {
    res.send('Got a PUT request at / user');
});

app.delete('/user', function( req, res ) {
    res.send('Got a DELETE request at / user')
});
*/
app.listen(3000, function() {
    console.log("Example app listening on port 3000!")
});