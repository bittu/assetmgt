import React from 'react';

class AppRoot extends React.Component {
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