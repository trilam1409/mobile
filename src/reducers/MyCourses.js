import { GET_MY_COURSES_LIST } from '../utils/Constants';

const initialState = { loading: false, my_courses_list: [] };

export default function myCoursesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MY_COURSES_LIST:
            state = Object.assign({}, state, { loading: action.loading, my_courses_list: action.my_courses_list });
            return state;
        default:
            return state;
    }
}
