import RestClient from '../services/RestClient';
import * as RequestUtil from '../utils/Request';
import * as EndpointUtil from '../utils/Endpoint';

exports.loginAccount = function(data) {
    return new Promise((resolve, reject) => {
        RestClient
            .getInstance()
            .addHeader({ 'Content-Type': 'application/json' })
            .request(RequestUtil.POST_REQUEST, EndpointUtil.LOGIN, data)
            .then((responseData) => {
                if ( responseData.status.code != 200 ) {
                    reject(responseData.status.message);
                    return;
                }

                resolve(responseData.data);
            }).catch((error) => {
                reject(error);
            });
    })
};
