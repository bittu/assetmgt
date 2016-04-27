import React, { PropTypes, Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Login from './components/Login';
import UserDashboard from './components/UserDashboard';

class Root extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    }

    render() {
        const { history } = this.props;
        return (
            <Router history={history}>
                <Route path='/'>
                    <IndexRoute component={Login} />
                    <Route path='userDashboard' component={UserDashboard} />
                </Route>
            </Router>
        );
    }
}

export default Root;