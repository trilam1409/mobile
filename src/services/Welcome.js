import * as GetCategoiesResponse from '../dump/GetCategoiesResponse';
import * as MockLoginSuccessfullyResponse from "../dump/LoginSuccessfullyResponse";

exports.getListCategoriesCourses = () => {
    return new Promise((resolve, reject) => {
        if(GetCategoiesResponse.status.code != 200) {
            return reject(GetCategoiesResponse.status.message);
        }

        resolve(GetCategoiesResponse.data);
    })
};
