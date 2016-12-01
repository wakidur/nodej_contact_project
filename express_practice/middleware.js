/*
var express = require('express');
var app = express();

var myLogger = function(req, res, next){
    console.log("LOGGED");
    next();
}
app.use(myLogger);

app.get('/', function(req, res) {
    res.send("Hello World!");
});

app.listen(3000);

*/


/*
var express = require('express');
var app = express();

var requestTime = function(req, res, next) {
    req.requestTime = Date.now();
    next();
}

app.use( requestTime );

app.get('/' , function(req, res) {
    var responseText = 'Hello World </br>'
        responseText += '<small> Requested at: '  + req.requestTime + '</small>'
        res.send(responseText);
});
app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
})

*/
// Application-level middleware
var express = require('express');
var app =  express();

// step - 1
/*
    app.use(function(req , res , next ) {
        console.log("Time: " , new Date().toISOString() );
        next();
    });
 */

// step - 2
/*
    app.use('/user/:id', function(req, res, next ){
        console.log('Request Type: ' , req.method);
        //res.send('Request Type: ' , req.method);
        next();
    });
    
    app.get('/user/:id', function(req, res, next) {
        res.send('USER');
    });

*/
    // setp-3
    /*
    app.use('/user/:id', function(req, res, next) {
        console.log('Request Url '  , req.originalUrl);
        next();
    }, function(req, res, next) {
        console.log('Request Type', req.method);
    });
    app.get('/user/:id', function(req, res, next) {
        res.send('your id ');
    });
*/
// setp-4
/*
app.get('/user/:id', function(req,res,next){
    console.log('ID: ' , req.params.id );
    next();
}, function(req, res, next){
    res.send("user Info");
});
*/
// Handler for the /user/:id path which parints the user ID
app.get('/user/:id', function(req, res, next){
    res.end(req.params.id);
});

    /*
    app.get('/' , function(req, res){
        res.send("Server start ");
    });
    */
    app.listen('3000' , function(){
        console.log("Example app listening on port 3000!");
    })
