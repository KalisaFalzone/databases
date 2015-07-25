var express = require('express');
var db = require('./db');
var models = require('./models');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// // Logging and parsing
 app.use(morgan('dev'));
 app.use(parser.json());
 app.use(parser.urlencoded({ extended: true }));
// // Set up our routes
 app.use("/classes", router);

// // Serve the client files
 app.use(express.static(__dirname + "/../client"));

//Allow Cross Origin Requests to pass through
 app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// // If we are being run directly, run the server.
 if (!module.parent) {
   app.listen(app.get("port"));
   console.log("Listening on", app.get("port"));
 }

//GET request
app.get('/classes', function(request, response) {
	//response.send('GET received!');
	models.messages.get(function(array) {
		response.set('Content-Type', 'application/json');
		var result = { results : array };
		response.status(200).send(JSON.stringify(result));
	});
});

app.post('/classes', function(request, response){
	 console.log('Received Message:');
	 console.log(request.body);
	models.messages.post(request.body);
	//response.end(request.body);
})

//Test excerpt - DBMS's get and post methods
//models.messages.post();
//models.messages.get();

//handle the get request from client
	//once we get the get request process this by adding the models to DB
	//initiate get to chat DB (model.get)
	//package and respond to the client (server-app.js getmethod)

//handle post from client
	//get the message in model's POST handler
	//model's POST handler posts and gets chats from chat DB
	//model's POST handler requests a GET from the DB
	//model's POST handler sends backk the entire list to the chatterbox client
