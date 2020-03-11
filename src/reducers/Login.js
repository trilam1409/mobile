import { LOGIN_ACCOUNT } from '../utils/Constants';

const initialState = { login_data: {}};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_ACCOUNT:
            state = Object.assign({}, state, { login_data: action.login_data });
            return state;
        default:
            return state;
    }
}
