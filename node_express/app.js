/*var express = require('express');
var http = require('http');
var app = express();

app.configure( function(){
  app.set('port', process.env.PORT || 3000);

  //app.set('views', __dirname + '/views');
 // app.set('view engine', 'jade');
  //app.set('view cache', true);
  //app.enable('view cache');
  // case sensitive routes
  // strict routing
  app.use(express.bodyParser());
  //app.set('local mesasages', true);
});

app.get('/', function(req, res){
  // res.render('home', {title:"Having Fun with express; something else"})
  console.log("hello world");
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
})

*/

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})