import React from 'react';
import LoginStore from '../stores/LoginStore';
import RouterStore from '../stores/RouterStore';
import LoginActionCreators from '../actions/LoginActionCreators';
import { Route, RouteHandler, Link } from 'react-router';

export default class App extends React.Component {

  constructor() {
    super();

    //set initial state dircetly when extending React.Component
    //use getInitialState hook when using React.createClass();
    this.state = this._getLoginState();
  }

  _getLoginState() {
    return {
      userLoggedIn: LoginStore.isLoggedIn()
    };
  }

  componentDidMount() {
    //register change listener with LoginStore
    this.changeListener = this._onLoginChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
  }

  /*
    This event handler deals with all code-initiated routing transitions
    when logging in or logging out
  */
  _onLoginChange() {
    //get a local up-to-date record of the logged-in state
    //see https://facebook.github.io/react/docs/component-api.html
    let userLoggedInState = this._getLoginState();
    this.setState(userLoggedInState);

    //get any nextTransitionPath - NB it can only be got once then it self-nullifies
    let transitionPath = RouterStore.nextTransitionPath || '/';

    //trigger router change
    console.log("&*&*&* App onLoginChange event: loggedIn=", userLoggedInState.userLoggedIn,
      "nextTransitionPath=", transitionPath);

    if(userLoggedInState.userLoggedIn){
      this.props.router.transitionTo(transitionPath);
    }else{
      this.props.router.transitionTo('/login');
    }
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">React Flux app with JWT authentication innit</a>
          </div>
          {this.headerItems}
        </nav>
        <RouteHandler/>
      </div>
    );
  }

  logout(e) {
    e.preventDefault();
    LoginActionCreators.logoutUser();
  }

  get headerItems() {
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