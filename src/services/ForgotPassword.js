import RestClient from '../services/RestClient';
import * as RequestUtil from '../utils/Request';
import * as EndpointUtils from '../utils/Endpoint';

exports.forgotPassword = (data) => {

    return new Promise((resolve, reject) => {
        RestClient.getInstance().request(RequestUtil.POST_REQUEST, EndpointUtils.FORGOT_PASSWORD, data)
            .then((responseData) => {
                if (responseData.status.code != 200) {
                    return;
                }

                resolve({message: responseData.status.message});


            }).catch((error) => {
            reject(error);
        });
    });
};
