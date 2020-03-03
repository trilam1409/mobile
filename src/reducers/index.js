import { combineReducers } from 'redux';
import navReducer from '../reducers/Nav';
import loadingReducer from '../reducers/Loading';
import loginReducer from '../reducers/Login';
import courseDetailReducer from '../reducers/CourseDetail';
import myCoursesReducer from '../reducers/MyCourses';

export default combineReducers({
  nav: navReducer,
  loadingReducer,
  loginReducer,
  courseDetailReducer,
  myCoursesReducer
});


