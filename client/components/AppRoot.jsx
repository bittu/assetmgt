import React, {Component} from 'react';

class AppRoot extends Component {
	render() {
		let itemHTML = <li>Hello React</li>;
		return <div>
					<ul>
						{ itemHTML }
					</ul>
				</div>;
	}
}

export default AppRoot;