import ActionTypes from '../constants/ActionTypes';
import BaseStore from './BaseStore';
import jwtDecode from 'jwt-decode';

class LoginStore extends BaseStore {
	constructor() {
		super();
		this.subscribe(() => this._registerToActions.bind(this));
		this._employee = null;
		this._error = null;
		this._jwt = null;

		console.log('&*&*&*& attempting auto-login in LoginStore');
		this._autoLogin();
	}

	_registerToActions(action) {
		switch(action.type) {
			case ActionTypes.REQUEST_LOGIN_SUCCESS:
				console.log(action);
				this._jwt = action.body.authorization;
				localStorage.setItem('jv_jwt', this._jwt);
				this._employee = jwtDecode(this._jwt).employee;
				this._error = null;
				this.emitChange();
				break;
			
			case ActionTypes.REQUEST_LOGIN_ERROR:
				this._error = action.error;
				this.emitChange();
				break;

			case ActionTypes.LOGOUT:
				this._employee = null;
				this._error = null;
				this._jwt = null;
				localStorage.setItem("jv_jwt", "");
				this.emitChange();
				break;

			default:
				break;
		}
	}

	_autoLogin () {
		let jwt = localStorage.getItem("jv_jwt");
		if (jwt) {
			this._jwt = jwt;
			this._employee = jwtDecode(this._jwt).employee;
			this.emitChange();
			console.log("&*&*&* autologin success")
		}
	}

	get employee() {
		return this._employee;
	}

	get error() {
		return this._error;
	}

	get jwt() {
		return this._jwt;
	}

	isLoggedIn() {
		return !!this._employee;
	}
}

export default new LoginStore();