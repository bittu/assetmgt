import { dispatch, dispatchAsync } from '../dispatchers/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import AuthService from '../services/AuthService';

export default {
	loginUser: (userName, password) => {
		let promise = AuthService.login(userName, password);

		dispatchAsync(promise, {
			request: ActionTypes.REQUEST_LOGIN_USER,
      success: ActionTypes.REQUEST_LOGIN_USER_SUCCESS,
      failure: ActionTypes.REQUEST_LOGIN_USER_ERROR
		}, { userName, password });
	},

	logoutUser: () => {
    dispatch(ActionTypes.LOGOUT_USER);
  }
}