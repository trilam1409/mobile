import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MasterView from '../views/Master';
import WelcomeView from '../views/Welcome';
import * as WelcomeAction from '../actions/Welcome';

class Welcome extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._getCategoryCoursesList();
  }

  _getCategoryCoursesList() {
      this.props.getCategoryCoursesList().then((response) => {
      }).catch((error) => {
      });
  }

  onCardPress(item) {
    this.props.navigation.navigate('CourseDetail', item);
  }

  render() {
      return <MasterView haveHeader={'KHÁM PHÁ'}
                         content={<WelcomeView navigate={this.props.navigation.navigate}
                                               onCardPress={this.onCardPress.bind(this)}
                                               listCategoriesCourses={this.props.list_category_course} />} />;
  }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  return {
      list_category_course: state.welcomeReducer.list_category_course
  };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, WelcomeAction), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
