import { dispatch, dispatchAsync } from '../dispatchers/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import AuthService from '../services/AuthService';

export default {
	login: (EmployeeID, Password) => {
		let promise = AuthService.login(EmployeeID, Password);

		dispatchAsync(promise, {
			request: ActionTypes.REQUEST_LOGIN,
      		success: ActionTypes.REQUEST_LOGIN_SUCCESS,
      		failure: ActionTypes.REQUEST_LOGIN_ERROR
		}, { EmployeeID });
	},

	logout: () => {
    	dispatch(ActionTypes.LOGOUT);
  	}
}