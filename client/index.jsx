import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Login from './components/Login';
import UserDashboard from './components/UserDashboard';

const rootEl = document.getElementById('app');

render(<Router history={hashHistory}>
          <Route path='/'>
            <IndexRoute component={Login} />
            <Route path='userDashboard' component={UserDashboard} />
          </Route>
     	 </Router>, rootEl);
