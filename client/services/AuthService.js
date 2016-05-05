import request from 'request';
import bluebird from 'bluebird';

import URLS from '../constants/AppConstants';

class AuthService {

	login(EmployeeID, Password) {
		let payload = {EmployeeID, Password};
		return new bluebird( (resolve, reject) => {
			request.post({
				url: URLS.LOGIN_URL,
				body: {payload},
				json: true
			}, (err, response, body) => {
					if(err){
	            return reject(err);
	        }
	        if(response.statusCode >= 400){
	            return reject(body);
	        }
	        body.authorization = response.headers.authorization;
	        return resolve(body);
				})
		});
	}

	logout(authorization) {
		
		return new bluebird( (resolve, reject) => {
			request.post({
				url: URLS.LOGOUT_URL,
				headers: {authorization},
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