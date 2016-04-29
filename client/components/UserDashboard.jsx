import React, {Component} from 'react';
import AuthenticatedComponent from './AuthenticatedComponent'

export default AuthenticatedComponent(class UserDashboard extends Component {
	render() {
		let itemHTML = <li>Hello React</li>;
		return <div>
						<ul>
							{ itemHTML }
						</ul>
					</div>;
	}
});
