import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

import './Style/Style.css';

import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import MenuCreate from './components/MenuCreate/MenuCreate';
import NewRestaurant from './components/NewRestaurantSignUp/NewRestaurantSignUp';

ReactDom.render(
  <Router history={browserHistory}>
    <Route path='/' component={LandingPage} />
    <Route path='/sign_up' component={NewRestaurant} />
    <Route path='/login' component={Login} />
    <Route path='/menu_create' component={MenuCreate} />
  </Router>
  , document.getElementById('app'));
