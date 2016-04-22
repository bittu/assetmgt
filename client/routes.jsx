import React, { PropTypes, Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import Login from './components/Login';
import UserDashboard from './components/UserDashboard';

export default (
	<Route path='/'>
		<IndexRoute component={Login} />
		<Route path='/userDashboard' component={UserDashboard}/>
	</Route>
)