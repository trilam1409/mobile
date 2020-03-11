import RestClient from "./RestClient";
import * as RequestUtil  from "../utils/Request";
import * as EndpointUtil  from "../utils/Endpoint";

exports.getCourseVideoList = function(courseId = null) {
    return new Promise((resolve, reject) => {
        if(!courseId) {
            return reject('Course Id is required');
        }

        RestClient
            .getInstance()
            .request(RequestUtil.GET_REQUEST, EndpointUtil.COURSE_DETAIL, {invite_id: courseId}, true)
            .then(responseData => {
                if(responseData.status.code != 200) {
                    return reject('Fail in getting course detail');
                }

                resolve(responseData.data);
            })
            .catch(error => {
                reject(error);
            });
    });
};
