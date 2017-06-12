//============================
// Import our dependencies, and
// our controllers
//============================
const express = require('express');
// const main = require('./controllers/main');
const test = require('./controllers/test');
const _rackRequest = require('./controllers/_rack-request');


//============================
// Export the api routes
//============================
module.exports = function(app) {

  //create the router
  const apiRoutes = express.Router();

  //define first router
  // app.get('/', main.Dash_board);
  app.get('/test', test.test);
  app.post('/rack', _rackRequest.rack)



  //tell the app to use apiRoutes
  //and set the base url to
  // localhost:300/api
  app.use('/', apiRoutes);
}
