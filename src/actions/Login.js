import { LOGIN_ACCOUNT } from '../utils/Constants';
import * as LoginService from '../services/Login';

export const loginAccount = (data) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            LoginService.loginAccount(data).then((loginResponse) => {
                dispatch({ type: LOGIN_ACCOUNT, login_data: loginResponse });
                resolve(loginResponse);
            }).catch((error) => {
                reject(error);
            })
        });
    };
};
