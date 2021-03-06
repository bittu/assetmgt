import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import App from './components/App';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';

import LoginStore from './stores/LoginStore';
import RouterActions from './actions/RouterActions';

function onEnterChange (nextState, replace, callback) {
	console.log('&*&*&* willTransitionTo for authenticated page. Next transition path:', nextState.location.pathname, 'logged in:', LoginStore.isLoggedIn());
	if (!LoginStore.isLoggedIn()) {
		RouterActions.storeRouterTransitionPath(nextState.location.pathname);
		replace({
	      pathname: '/login',
	      state: { nextPathname: nextState.location.pathname }
	    })
	}
	callback();
}

function onEnterChangeAdmin(nextState, replace, callback) {
	console.log('&*&*&* willTransitionTo for authenticated authorized page. Next transition path:', nextState.location.pathname, 'logged in:', LoginStore.isLoggedIn(), 'isAdmin: ', LoginStore.employee.Admin);
	if (!LoginStore.isLoggedIn()) {
		RouterActions.storeRouterTransitionPath(nextState.location.pathname);
		replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
	} else {
		if(!LoginStore.employee.Admin) {
			replace({
	      pathname: '/'
	    })
		}
	}
	callback();
}

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })			

render(<Router history={appHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={UserDashboard} onEnter={onEnterChange}/>
            <Route name="login" path="/login" component={Login}/>
            <Route name="adminDashboard" path="/adminDashboard" component={AdminDashboard} onEnter={onEnterChangeAdmin}/>
          </Route>
     	 </Router>, document.getElementById('app'));
