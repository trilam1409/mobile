import {GET_MY_COURSES_LIST, GET_QUOTE, LOGIN_ACCOUNT, MY_PROFILE} from '../utils/Constants';
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
        // return new Promise((resolve, reject) => {
        //     MyCoursesService.getQuote().then((data) => {
        //         dispatch({type: GET_QUOTE, quote: data});
        //         resolve(data);
        //     }).catch((error) => {
        //         reject(error);
        //     });
        // });

        let data = {
            "quote": "'Bác học không có nghĩa ngừng học'",
            "author": "Dawrwin",
            "img_url": "https://i.ibb.co/HhscHg6/header-Home.png"
        };

        dispatch({type: GET_QUOTE, quote: data});
    };
};

export const getProfileAction = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            MyCoursesService.getProfileService().then((response) => {

                dispatch({ type: MY_PROFILE, my_profile: response });
                resolve()

            }).catch((error) => {
                reject(error);
            })
        });
    };
};
