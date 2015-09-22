/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var browserSync = require('browser-sync');
var mongoose = require('mongoose');
var config = require('./_config/environment');

//Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
    }
);
// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
var server = require('http').createServer(app);
// var socketio = require('socket.io')(server, {
//   serveClient: config.env !== 'production',
//   path: '/socket.io-client'
// });
// require('./config/socketio')(socketio);
require('./_config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  browserSync({

    proxy: 'localhost:' + config.port,
    files: ['./client/_built'],
    ghostMode: {
        clicks: true,
        forms: false,
        scroll: true
    },
    logSnippet: false,
    logLevel: "silent",
    open: true,
    notify: false,
    reloadDebounce: 5000,
    browser: ["google chrome"] //, "firefox"]
  });
});

// Expose app
exports = module.exports = app;