//MODELS

var db = require('../db');

var testMessage = {
  message: 'hello there',
  room: 'my room',
  username: 'admin'
};

module.exports = {
  messages: {

    get: function (callback) {  // a function which produces all the messages
    	//callback with the results.
			db.select(function(err, rows, fields) {
				  if (!err) {
				    console.log('The solution is: ', rows, 'type:', typeof rows);
				    callback(rows);
				  } else { console.log('Error while performing Query.'); }
			});
    },

    post: function () {  // a function which can be used to insert a message into the database
    	db.insert(testMessage);
    }

  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

