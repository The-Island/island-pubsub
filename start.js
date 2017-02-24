#!/usr/bin/env node

var worker = require('island-worker');
var util = require('util');
var pack = require('./package.json');

// Start a worker.
worker.start({
  port: process.env.PORT || pack.port,
  collections: {},
  pubPort: process.env.PUB_SOCKET_PORT || pack.pubSocketPort,
  subPort: process.env.SUB_SOCKET_PORT || pack.subSocketPort,
  onReady: function (db) {
    this.db = db;
    util.log('Ready for pubsubs.');
  },
}, function (err) { if (err) throw err; });
