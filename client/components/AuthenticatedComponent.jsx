import React, { Component } from 'react';
import LoginStore from '../stores/LoginStore';
import LoginAction from '../actions/LoginActions';
import RouterAction from '../actions/RouterActions';

export default (ComposedComponent) => {
	return class AuthenticatedComponent extends Component {

		constructor() {
		  super();
		  this.state = this._getLoginState();
		}

		_getLoginState() {
			console.log(LoginStore);
			console.log(LoginStore.user);
		  return {
			userLoggedIn: LoginStore.isLoggedIn(),
			user: LoginStore.user,
			jwt: LoginStore.jwt
		  };
		}

		componentDidMount() {
		  this.changeListener = this._onChange.bind(this);
		  LoginStore.addChangeListener(this.changeListener);
		}

		_onChange() {
		  this.setState(this._getLoginState());
		}

		componentWillUnmount() {
		  LoginStore.removeChangeListener(this.changeListener);
		}

		render() {
			return (
      <ComposedComponent
        {...this.props}
        user={this.state.user}
        jwt={this.state.jwt}
        userLoggedIn={this.state.userLoggedIn} />
      );
		}
	}
}