import { LOGOUT_ACCOUNT } from '../utils/Constants';

const initialState = {};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGOUT_ACCOUNT:
        default:
            return state;
    }
}
