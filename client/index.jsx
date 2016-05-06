import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import App from './components/App';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';

import LoginStore from './stores/LoginStore';
import RouterActions from './actions/RouterActions';

const rootEl = document.getElementById('app');

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

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })			

render(<Router history={appHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={UserDashboard} onEnter={onEnterChange}/>
            <Route name="login" path="/login" component={Login}/>
          </Route>
     	 </Router>, rootEl);
