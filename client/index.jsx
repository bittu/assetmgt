import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';

import LoginStore from './stores/LoginStore';

const rootEl = document.getElementById('app');

function onEnterChange (nextState, replace, callback) {
				console.log('&*&*&* willTransitionTo for authenticated page. Next transition path:', nextState.location.pathname, 'logged in:', LoginStore.isLoggedIn());
				if (!LoginStore.isLoggedIn()) {
					replace({
				      pathname: '/',
				      state: { nextPathname: nextState.location.pathname }
				    })
				}
				callback();
			}

render(<Router history={hashHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={Login} />
            <Route path='userDashboard' component={UserDashboard} onEnter={onEnterChange}/>
          </Route>
     	 </Router>, rootEl);
