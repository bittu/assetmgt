import React, { Component } from 'react';

import LoginActions from '../actions/LoginActions';

class Login extends Component {

  render() {
    return (
      <form>
        <input placeholder="Login" />
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Login;