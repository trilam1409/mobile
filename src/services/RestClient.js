import * as RequestUtil from '../utils/Request';
import * as CredentialsUtil from '../utils/Credentials';
import * as EndpointUtil from '../utils/Endpoint';
import * as CacheService from '../services/Cache';
import * as QueryString from 'querystring';

export default class RestClient {
    static instance = null;

    constructor() {
        this.baseurl = EndpointUtil.API_DOMAIN_URL;
        this.header = {
            'x-access-token': ''
        };
    }

    static getInstance() {
        return this.instance === null ? this.instance = new RestClient() : this.instance;
    }

    addHeader(value) {
        this.header = Object.assign({}, this.header, value);
        return this;
    }

    request(method = RequestUtil.GET_REQUEST, endpoint = null, requestParams = {}, needAuth = false) {
        return new Promise((resolve, reject) => {
            let url = this.baseurl + endpoint;
            switch (method) {
                case RequestUtil.POST_REQUEST:
                case RequestUtil.PUT_REQUEST:
                    requestParams = (requestParams) ? JSON.stringify(requestParams) : null;
                    break;
                case RequestUtil.GET_REQUEST:
                    if(requestParams) {
                        url = url + '?' + QueryString.stringify(requestParams);
                        requestParams = null;
                    }
                default:
                    break;
            }

            if (!needAuth) {
                fetch(url, {
                    method: method,
                    headers: this.header,
                    body: requestParams
                })
                .then((response) => response.json())
                .then((responseJson) => resolve(responseJson))
                .catch((error) => {
                    reject(error);
                });

                return;
            }

            CacheService.getFromCache(CredentialsUtil.ACCESS_TOKEN_CACHE_KEY).then(credentials => {
                this.addHeader({'x-access-token' : credentials});

                fetch(url, {
                    method: method,
                    headers: this.header,
                    body: requestParams
                })
                .then((response) => response.json())
                .then((responseJson) => resolve(responseJson))
                .catch((error) => {
                    reject(error);
                });

            }).catch(error => {
                reject(error);
            })
        });
    }
}
