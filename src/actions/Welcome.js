import { WELCOME_GET_CATEGORIES_COURSES } from '../utils/Constants';
import * as WelcomeService from '../services/Welcome';

export const getCategoryCoursesList = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            WelcomeService.getListCategoriesCourses().then((response) => {
                dispatch({ type: WELCOME_GET_CATEGORIES_COURSES, list_category_course: response });
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        });
    };
};
