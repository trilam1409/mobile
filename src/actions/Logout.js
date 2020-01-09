import { LOGOUT_ACCOUNT } from '../utils/Constants';
import * as LogoutService from '../services/Logout';

export const logoutAccount = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            LogoutService.logoutAccount().then(() => {
                dispatch({ type: LOGOUT_ACCOUNT });
                resolve();
            }).catch((error) => {
                reject(error);
            })
        });
    };
};
