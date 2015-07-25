//DB - Index
var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'chat'
	});

exports.insert = function(message){
	connection.query('INSERT into messages VALUES ('+1+','+message.message+','+message.room+','+message.username+');');
};

exports.select = function(callback) {
	connection.query('SELECT * from messages', callback);
};

// function(err, rows, fields) {
// 	  if (!err)
// 	    console.log('The solution is: ', rows);
// 	  else
// 	    console.log('Error while performing Query.');
// };
