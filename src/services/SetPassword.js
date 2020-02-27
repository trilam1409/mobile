import RestClient from '../services/RestClient';
import * as RequestUtil from '../utils/Request';
import * as EndpointUtils from '../utils/Endpoint';

exports.setPassword = (data) => {
    return new Promise((resolve, reject) => {
        RestClient.getInstance().request(RequestUtil.POST_REQUEST, EndpointUtils.SET_PASSWORD, data)
            .then((responseData) => {
                if (responseData.status.code != 200) {
                    return;
                }

                resolve(responseData)
            }).catch((error) => {
                reject(error)
        })
    })
}
