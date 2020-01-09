import { GET_MY_COURSES_LIST } from '../utils/Constants';
import * as MyCoursesService from '../services/MyCourses';

export const getMyCoursesList = (userId = null) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            MyCoursesService.getMyCoursesList().then((data) => {
                dispatch({ type: GET_MY_COURSES_LIST, my_courses_list: data });
                resolve(data);
            }).catch((error) => {
                reject(error);
            })
        });
    };
};
