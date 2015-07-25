//Controllers
var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (request, response) {}, // a function which handles a get requestuest ponsefor all messages
    post: function (request, response) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (request, response) {},
    post: function (request, response) {}
  }
};

