import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MasterView from '../views/Master';
import * as LoadingAction from "../actions/Loading";
import * as MyCoursesAction from "../actions/MyCourses";
import MyCoursesView from "../views/my_course_list/MyCoursesView";

class MyCourses extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.showLoading(true);
        this.props.getMyCoursesList().then(result => {
            this.props.showLoading(false);
        }).catch(error => {
            this.props.showLoading(false);
        })
    }

    onCardPress(item) {
        this.props.navigation.navigate('CourseDetail', item);
    }

    render() {
        return <MasterView haveHeader={'CÁC KHOÁ HỌC CỦA TÔI'}
                           content={<MyCoursesView listCourses={this.props.my_courses_list}
                                                   onCardPress={this.onCardPress.bind(this)}
                                    />}/>;
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.loadingReducer.loading,
        my_courses_list: state.myCoursesReducer.my_courses_list
    };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, LoadingAction, MyCoursesAction), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCourses);

