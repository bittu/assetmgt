import React from 'react';
import LoginStore from '../stores/LoginStore';
import RouterStore from '../stores/RouterStore';
import { Route, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from './Header';

export default class App extends React.Component {

  constructor() {
    super();

    //set initial state dircetly when extending React.Component
    //use getInitialState hook when using React.createClass();
    this.state = this._getLoginState();
  }

  _getLoginState() {
    return {
      employeeLoggedIn: LoginStore.isLoggedIn(),
      employee: LoginStore.employee
    };
  }

  componentWillMount() {
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
    let employeeLoggedInState = this._getLoginState();
    this.setState(employeeLoggedInState);

    //get any nextTransitionPath - NB it can only be got once then it self-nullifies
    let transitionPath = RouterStore.nextTransitionPath || '/';

    //trigger router change
    console.log("&*&*&* App onLoginChange event: loggedIn=", employeeLoggedInState.userLoggedIn,
      "nextTransitionPath=", transitionPath);

    if(employeeLoggedInState.employeeLoggedIn){
      //this.props.router.transitionTo(transitionPath);
      this.setState({employee: LoginStore.employee});
      this.props.history.push(transitionPath);
    }else{
      //this.props.router.transitionTo('/');
      this.props.history.push('/login');
    }
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  render() {
    console.log('App render '+this.state)
    return (
      <div>
        <Header employeeLoggedIn={this.state.employeeLoggedIn} employee={this.state.employee} />
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
      >
        {this.props.children}
      </ReactCSSTransitionGroup>
      </div>
    );
  }

}