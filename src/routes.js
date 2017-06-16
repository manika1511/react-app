// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import DashBoard from './components/Dashboard';
import About from './components/About';
import NotFound from './components/NotFound';


const Routes = (props) => (
  <Router {...props}>
    <Route name="home" path="/" component={DashBoard} />
    <Route name="about" path="/about" component={About} />
    <Route name="notFound" path="*" component={NotFound} />
  </Router>
);

export default Routes;
