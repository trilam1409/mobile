import { GET_COURSE_VIDEO_LIST, CHOOSE_COURSE_VIDEO } from '../utils/Constants';
import * as CourseDetail from '../services/CourseDetail';

export const getCourseVideoList = (courseId = null) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            CourseDetail.getCourseVideoList(courseId).then((data) => {
                dispatch({ type: GET_COURSE_VIDEO_LIST, course_video_list: data });
                dispatch({ type: CHOOSE_COURSE_VIDEO, choose_video:  data.chapter[0].section[0].lesson[0] });
                resolve(data);
            }).catch((error) => {
                reject(error);
            })
        });
    };
};

export const chooseVideo = (videoId = null) => {
    return (dispatch) => {
        dispatch({ type: CHOOSE_COURSE_VIDEO, choose_video: videoId });
    };
};
