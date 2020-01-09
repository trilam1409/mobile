import { LOADING } from '../utils/Constants';

export const showLoading = (isLoading) => {
  return (dispatch) => {
    dispatch({ type: LOADING, loading: isLoading });
  };
};
