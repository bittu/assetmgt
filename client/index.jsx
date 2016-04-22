/*import React, { PropTypes, Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import { browserHistory, Router, Route, Link, routerShape } from 'react-router';
import AppRoot from './components/AppRoot';

export default class App extends Component {
	static propTypes = {
    	history: PropTypes.object.isRequired
  	}

  	render() {
  		const { history } = this.props;
  		return (
  			<Router history={history}>
  				<Route name='explore' path='/' component={App}>
  					<IndexRoute name='explore' path='/' component={Login} />
  				</Route>
  			</Router>
  			);
  	}
}*/

import React from 'react';
import { render } from 'react-dom';
import router from './router';

//run the router
router.run(function (Handler) {
  render(<Handler />, document.getElementById('app'));
});