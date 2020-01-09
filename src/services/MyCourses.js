import RestClient from "./RestClient";
import * as EndpointUtil from "../utils/Endpoint";
import * as RequestUtil from "../utils/Request";

exports.getMyCoursesList = function() {
    return new Promise((resolve, reject) => {
        RestClient.getInstance().request(RequestUtil.GET_REQUEST, EndpointUtil.MY_COURSES, null, true)
            .then((responseData) => {
                if(responseData.status.code != 200) {
                    reject(responseData.status.message);
                    return;
                }

                resolve(responseData.data);
            });
    });
};
