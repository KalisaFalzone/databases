var express = require('express');
var db = require('./db');
var models = require('./models');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);

// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}


//Test excerpt
models.messages.post();
models.messages.get();

//handle the get request from client
	//once we get the get request process this by adding the models to DB
	//initiate get to chat DB (model.get)
	//package and respond to the client (server-app.js getmethod)

//handle post from client
	//get the message in model's POST handler
	//model's POST handler posts and gets chats from chat DB
	//model's POST handler requests a GET from the DB
	//model's POST handler sends backk the entire list to the chatterbox client
