import request from 'request';
import bluebird from 'bluebird';

import {LOGIN_URL, LOGOUT_URL} from '../constants/AppConstants';

class AuthService {

	login(userName, password) {
		return new bluebird( (resolve, reject) => {
			request.post({
				url: LOGIN_URL,
				body: {userName, password},
				json: true
			}, (err, response, body) => {
					if(err){
	            return reject(err);
	        }
	        if(response.statusCode >= 400){
	            return reject(body);
	        }
	        return resolve(body);
				})
		});
	}
}

export default new AuthService();