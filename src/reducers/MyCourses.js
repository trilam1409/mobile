import { GET_MY_COURSES_LIST, GET_QUOTE } from '../utils/Constants';

const initialState = { loading: false, my_courses_list: [], quote: {quote: '', author: ''} };

export default function myCoursesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MY_COURSES_LIST:
            state = Object.assign({}, state, { loading: action.loading, my_courses_list: action.my_courses_list });
            return state;
        case GET_QUOTE:
            state = Object.assign({}, state, { quote: action.quote });
            return state;
        default:
            return state;
    }
}
