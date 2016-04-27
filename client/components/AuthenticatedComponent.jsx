import React, { Component } from 'react';
import LoginStore from '../stores/LoginStore';
import LoginAction from '../actions/LoginActions';
import RouterAction from '../actions/RouterActions';

export default (ComposedComponent) => {
	return class AuthenticatedComponent extends Component {
		static willTransitionTo(transition) {
			console.log('&*&*&* willTransitionTo for authenticated page. Next transition path:', transition.path, 'logged in:', LoginStore.isLoggedIn());
			if (!LoginStore.isLoggedIn()) {

				let transitionPath = transition.path;

				//store next path in RouterStore for redirecting after authentication
				//as opposed to storing in the router itself with:
				// transition.redirect('/login', {}, {'nextPath' : transition.path});
				RouterActionCreators.storeRouterTransitionPath(transitionPath);

				//go to login page
				transition.redirect('/');
			}
		}

		constructor() {
		  super();
		  this.state = this._getLoginState();
		}

		_getLoginState() {
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