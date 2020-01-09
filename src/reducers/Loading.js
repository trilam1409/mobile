import { LOADING } from '../utils/Constants';

const initialState = { loading: false };

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      state = Object.assign({}, state, { loading: action.loading });
      return state;
    default:
      return state;
  }
}
