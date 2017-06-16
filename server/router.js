//============================
// Import our dependencies, and
// our controllers
//============================
const express = require('express');
const path = require('path');
// const main = require('./controllers/main');
const test = require('./controllers/test');
const _rackRequest = require('./controllers/_rack-request');
const node = require('./controllers/rack_nodes');
const node_data = require('./controllers/node_data');

//============================
// Export the api routes
//============================
module.exports = function(app) {

  //create the router
  const apiRoutes = express.Router();

  // Serve static assets
  app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
  app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
  //define first router
  app.post('/rack', _rackRequest.rack)
  app.post('/node', node.node)
  app.post('/node_data', node_data.node_data)
  app.post('/test', test.test)

  //tell the app to use apiRoutes
  //and set the base url to
  // localhost:300/api
  app.use('/', apiRoutes);
}
