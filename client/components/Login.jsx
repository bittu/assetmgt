import React, { Component } from 'react';

import LoginActions from '../actions/LoginActions';
import LoginStore from '../stores/LoginStore';
import RouterStore from '../stores/RouterStore';

import { Card, Row, Col, Input, Button, Icon } from 'react-materialize';

import NumberInput from './shared/NumberInput';

<Button type='submit' waves='light'>Submit<Icon right>send</Icon></Button>;

class Login extends Component {

	constructor() {
    super();
    this.state = {
    	EmployeeID: '',
    	Password: ''
    };

    this.login = this.login.bind(this);
    this.employeeIDChange = this.employeeIDChange.bind(this);
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
  }

  login(e) {
    e.preventDefault();
    console.log(this.state);
    if(!this.state.EmployeeID || !this.state.Password) {
      this.state.errorMessage = 'Please fill all fields';
      return;
    }
    LoginActions.login(this.state.EmployeeID, this.state.Password);
  }

  employeeIDChange(val) {
 		this.setState({EmployeeID: val});
  }

  passwordChange(e) {
    this.setState({Password: e.target.value});
  }

  render() {
    console.log('render');
    return (
      <Row>
        <Col s={4} offset='s4'>
          <Card title='Login' className='loginCard'>
            <form role="form" onSubmit={this.login}>
              <Row>
                <NumberInput col={12} label="EmployeeID" inputValue={this.state.EmployeeID} onChange={this.employeeIDChange} maxlength={7}/>
                <Input type="password" label="Password" s={12} value={this.state.Password} onChange={this.passwordChange}/>
                <Button type="submit" waves='light'>Submit<Icon right>send</Icon></Button>
              </Row>
            </form>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Login;