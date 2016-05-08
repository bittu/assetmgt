import React, { Component } from 'react';

import { Input } from 'react-materialize';

export default class NumberInput extends Component {

	constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

	handleChange(e) {
 		this.props.onChange(e.target.value.replace(/[^\d]/ig, '').substring(0, this.props.maxlength));
	}

	render() {
		console.log('numberinput render');

		return (<Input s={this.props.col} label={this.props.label} value={this.props.inputValue} onChange={this.handleChange}/>);
	}
}