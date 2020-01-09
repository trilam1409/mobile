import { GET_COURSE_VIDEO_LIST, CHOOSE_COURSE_VIDEO, LIST_VIDEO_CLICK } from '../utils/Constants';

const initialState = { course_video_list: [], choose_video: {} };

export default function courseDetailReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COURSE_VIDEO_LIST:
            state = Object.assign({}, state, { course_video_list: action.course_video_list });
            return state;
        case CHOOSE_COURSE_VIDEO:
            state = Object.assign({}, state, { choose_video: action.choose_video });
            return state;
        default:
            return state;
    }
}
