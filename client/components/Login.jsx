import React, { Component } from 'react';

import LoginActions from '../actions/LoginActions';

class Login extends Component {

	constructor() {
    super();
    this.state = {
    	username: '',
    	password: ''
    };
  }

  //action
  login(e) {
    e.preventDefault();
    LoginActions.loginUser(this.state.username, this.state.password);
  }

  userNameChange(e, value) {
 		this.setState('username', value);
  }

  passwordChange(e, value) {
 		this.setState('password', value);
  }

  render() {
    return (
      <div className="login jumbotron center-block">
        <h1>Login</h1>
        <form role="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" value={this.state.username} className="form-control" id="username" placeholder="Username" onChange={this.userNameChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={this.state.password} className="form-control" id="password" ref="password" placeholder="Password" onChange={this.passwordChange}/>
        </div>
        <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
      </form>
    </div>
    );
  }
}

export default Login;