import { combineReducers } from 'redux';
import navReducer from '../reducers/Nav';
import loadingReducer from '../reducers/Loading';
import loginReducer from '../reducers/Login';
import welcomeReducer from '../reducers/Welcome';
import courseDetailReducer from '../reducers/CourseDetail';
import myCoursesReducer from '../reducers/MyCourses';
import { reducer as form } from 'redux-form';

export default combineReducers({
  nav: navReducer,
  form,
  loadingReducer,
  loginReducer,
  welcomeReducer,
  courseDetailReducer,
  myCoursesReducer
});


