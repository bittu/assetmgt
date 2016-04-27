import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, HistoryLocation, HashLocation } from 'react-router';

import Login from './components/Login';
import UserDashboard from './components/UserDashboard';

const rootEl = document.getElementById('app');
const history = process.env.NODE_ENV === 'production' ?
  HashLocation :
  HistoryLocation;

let jwt = localStorage.getItem('jwt');
if (jwt) {
  LoginActions.loginUser(jwt);
}

render(<Router history={history}>
                <Route path='/'>
                    <IndexRoute component={Login} />
                    <Route path='userDashboard' component={UserDashboard} />
                </Route>
            </Router>, rootEl);
