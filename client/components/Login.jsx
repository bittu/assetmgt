import React, { Component } from 'react';

import LoginActions from '../actions/LoginActions';
import LoginStore from '../stores/LoginStore';
import RouterStore from '../stores/RouterStore';

import { Card, Row, Col, Input, Button, Icon } from 'react-materialize';

<Button type='submit' waves='light'>Submit<Icon right>send</Icon></Button>;

class Login extends Component {

	constructor() {
    super();
    this.state = {
    	username: '',
    	password: ''
    };

    this.login = this.login.bind(this);
    this.userNameChange = this.userNameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');
    if(LoginStore.isLoggedIn()) {
      this.props.history.push(RouterStore.nextTransitionPath || '/');
    }
    $('.loginCard').addClass('shown');
  }

  //action
  login(e) {
    e.preventDefault();
    console.log(this.state);
    LoginActions.login(this.state.username, this.state.password);
  }

  userNameChange(e) {
 		this.setState({username: e.target.value});
  }

  passwordChange(e) {
 		this.setState({password: e.target.value});
  }

  render() {
    console.log('render');
    return (
      <Row>
        <Col s={4} offset='s4'>
          <Card title='Login' className='loginCard'>
            <form role="form">
              <Row>
                <Input s={12} label="EmployeeID" value={this.state.username} onChange={this.userNameChange}/>
                <Input type="password" label="Password" s={12} value={this.state.password} onChange={this.passwordChange}/>
                <Button type="submit" waves='light' onClick={this.login.bind(this)}>Submit<Icon right>send</Icon></Button>
              </Row>
            </form>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Login;