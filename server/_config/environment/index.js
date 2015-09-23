'use strict';

var path = require('path');


// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,
  // Root path of server
  root: path.normalize(__dirname + '/../../..'),
  // Server port
  port: 9000,
  // Server IP
  ip: 'localhost',

  // Should we populate the DB with sample data?
  seedDB: false,
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/lvlup',
    options: {
      db: {
        safe: true
      }
    }
  },

};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = all;