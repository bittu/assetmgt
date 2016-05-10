import React, {Component} from 'react';
import AuthenticatedComponent from './AuthenticatedComponent'

export default AuthenticatedComponent(class AdminDashboard extends Component {
	render() {
		let itemHTML = <li>Hello React Admin</li>;
		return <div>
						<ul>
							{ itemHTML }
						</ul>
					</div>;
	}
});
