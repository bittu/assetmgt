import React, { Component } from 'react';

import LoginActions from '../actions/LoginActions';

export default class Header extends Component {

	constructor(props) {
		super(props);
	}


  logout(e) {
    e.preventDefault();
    LoginActions.logout(localStorage.getItem('jv_jwt'));
  }

	render() {

		let retStr;
		
		if (this.props.employeeLoggedIn) {
			retStr = (<ul className="right">
                <li>{this.props.employee.EmployeeID}</li>
                <li><a onClick={this.logout}>Logout</a></li>
              </ul>
				);
		}

		return (<div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper blue darken-1">
              <a className="brand-logo">g</a>
              {retStr}
            </div>
          </nav>
        </div>);
	}
}