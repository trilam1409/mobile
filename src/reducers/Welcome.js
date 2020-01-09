import { WELCOME_GET_CATEGORIES_COURSES } from '../utils/Constants';

const initialState = { list_category_course: [] };

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case WELCOME_GET_CATEGORIES_COURSES:
            state = Object.assign({}, state, { list_category_course: action.list_category_course });
            return state;
        default:
            return state;
    }
}
