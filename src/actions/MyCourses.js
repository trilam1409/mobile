import {GET_MY_COURSES_LIST, GET_QUOTE} from '../utils/Constants';
import * as MyCoursesService from '../services/MyCourses';

export const getMyCoursesList = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            MyCoursesService.getMyCoursesList().then((data) => {
                dispatch({type: GET_MY_COURSES_LIST, my_courses_list: data});
                resolve(data);
            }).catch((error) => {
                reject(error);
            });
        });
    };
};

export const getQuote = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            MyCoursesService.getQuote().then((data) => {
                dispatch({type: GET_QUOTE, quote: data});
                resolve(data);
            }).catch((error) => {
                reject(error);
            });
        });
    };
};
