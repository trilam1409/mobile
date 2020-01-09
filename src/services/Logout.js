import RestClient from '../services/RestClient';
import * as CacheService from '../services/Cache';
import * as RequestUtil from '../utils/Request';
import * as EndpointUtil from '../utils/Endpoint';
import * as CredentialsUtil from '../utils/Credentials';

exports.logoutAccount = function() {
    return new Promise((resolve, reject) => {
        RestClient
            .getInstance()
            .addHeader({ 'Content-Type': 'application/json' })
            .request(RequestUtil.POST_REQUEST, EndpointUtil.LOGOUT, {}, true)
            .then((responseData) => {
                if ( responseData.status.code != 200 ) {
                    reject(responseData.status.message);
                    return;
                }

                CacheService.removeFromCache(CredentialsUtil.ACCESS_TOKEN_CACHE_KEY).then(() => {
                    resolve();
                }).catch(e => {
                    reject(e);
                });

            }).catch((error) => {
                reject(error);
            });
    })
};
