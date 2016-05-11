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
			console.log(LoginStore.employee);
		  return {
			employeeLoggedIn: LoginStore.isLoggedIn(),
			employee: LoginStore.employee,
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
        employee={this.state.employee}
        jwt={this.state.jwt}
        employeeLoggedIn={this.state.employeeLoggedIn} />
      );
		}
	}
}