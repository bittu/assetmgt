import React, { Component } from 'react';

export default class Header extends Component {

	constructor() {
		super();

		this.state = this._getLoginState();
	}

	_getLoginState() {
    return {
      userLoggedIn: LoginStore.isLoggedIn()
    };
  }

	render() {
		
		if (!this.state.userLoggedIn) {
			return (<div>
				        <h1>Header</h1>
				      </div>
				);
		} else {
			return (<div>
				        <h1>Header</h1>
				        <a href="" onClick={this.logout}>Logout</a>
				      </div>
				);
		}
	}
}