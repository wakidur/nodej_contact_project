var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
   

app.get("/" , function(req, res){
  res.send('Hello world');
})

app.get("/hi" , function(req, res){
  var message = [
    "<h1> Hello </h1>",
    "<p> Welcome to</p>",

  ].join("\n");
  res.send(message);
});
app.get("/users/:userId", function(req, res){
  res.send("<h1> Hello , user # " + req.params.userId + "!");
});

// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post("/users", urlencodedParser, function(req,res){
  if(!req.body) return res.sendStatus(400)
  res.send("Creating a new use with the name " + req.body.username + ".");
});

app.get(/\/users\/(\d*)\/?(edit)?/, function(req, res) {
  // /users/10
  // /users/10/
  // /users/10/edit
  var message = "user #" + req.params[0] + "s profile";
  if(req.params[1] === 'edit'){
    message = "Editing " + message;
  } else {
    message = 'Viewing ' + message;
  }
  res.send(message);
})

app.listen(3000, function(){
  // app.use(express.bodyParser());
  console.log('Example app listening on port 3000!');
})
