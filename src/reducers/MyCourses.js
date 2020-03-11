import {GET_MY_COURSES_LIST, GET_QUOTE, MY_PROFILE} from '../utils/Constants';

const initialState = {
    loading: false,
    my_courses_list: [],
    quote: {},
    my_profile: {}
};

export default function myCoursesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MY_COURSES_LIST:
            state = Object.assign({}, state, {loading: action.loading, my_courses_list: action.my_courses_list});
            return state;
        case GET_QUOTE:
            state = Object.assign({}, state, {quote: action.quote});
            return state;
        case MY_PROFILE:
            state = Object.assign({}, state, {my_profile: action.my_profile});
            return state;
        default:
            return state;
    }
}
