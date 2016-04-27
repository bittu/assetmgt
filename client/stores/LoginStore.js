import ActionTypes from '../constants/ActionTypes';
import BaseStore from './BaseStore';
import jwt_decode from 'jwt_decode';

class LoginStore extends BaseStore {
	constructor() {
		super();
		this.subscribe(() => this.registerActions.bind(this));
		this._user = null;
		this._error = null;
		this._jwt = null;

		console.log('&*&*&*& attempting auto-login in LoginStore');
		this._autoLogin();
	}

	_registerToActions(action) {
		switch(action.type) {
			case ActionTypes.REQUEST_LOGIN_USER_SUCCESS:
				this._jwt = acrtion.body.id_token;
				localStorage.setItem('jv_jwt', this._jwt);
				this._user = jwt_decode(this._jwt);
				this._error = null;
				this.emitChange();
				break;
			
			case ActionTypes.REQUEST_LOGIN_USER_ERROR:
				this._error = action.error;
				this.emitChange();
				break;

			case ActionTypes.LOGOUT_USER:
				this._user = null;
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
			this._user = jwt_decode(this._jwt);
			console.log("&*&*&* autologin success")
		}
	}

	get user() {
		return this._user;
	}

	get error() {
		return this._error;
	}

	get jwt() {
		return this._jwt;
	}

	isLoggedIn() {
		return !!this._user;
	}
}