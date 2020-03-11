import RestClient from '../services/RestClient';
import * as RequestUtil from '../utils/Request';
import * as EndpointUtil from '../utils/Endpoint';
import {Alert} from 'react-native';

exports.loginAccount = function (data) {
    return new Promise((resolve, reject) => {
        RestClient
            .getInstance()
            .addHeader({'Content-Type': 'application/json'})
            .request(RequestUtil.GET_REQUEST, EndpointUtil.LOGIN, data, false, true)
            .then((responseData) => {

                if (responseData.error) {
                    resolve();
                    Alert.alert("Tên đăng nhập hoặc mật khẩu không đúng");
                    return;
                }

                resolve(responseData);
            }).catch((error) => {
            reject(error);
        });
    });
};
