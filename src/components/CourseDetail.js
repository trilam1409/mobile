import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MasterView from '../views/Master';
import CourseDetailView from '../views/course_detail/CourseDetailView';
import * as CourseDetailAction from '../actions/CourseDetail';
import * as LoadingAction from '../actions/Loading';
import LoadingComponent from '../components/Loading';

class CourseDetail extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._getCourseVideos();
    }

    _getCourseVideos() {
        const {navigation} = this.props;
        const id = navigation.getParam('id');
        this.props.showLoading(true);

        this.props.getCourseVideoList(id).then((data) => {
            this.props.showLoading(false);
        }).catch((error) => {
            this.props.showLoading(false);
        });
    }

    onPressVideo = (item) => {
        console.log(item)
        this.props.chooseVideo(item);
    }

    render() {
        if (this.props.loading) {
            return <LoadingComponent/>;
        } else {
            return <MasterView navigation={this.props.navigation}
                               haveBackButton={true}
                               content={<CourseDetailView
                                  videoToPlay={this.props.choose_video}
                                  // navigate={this.props.navigation.navigate}
                                   onPressVideo={this.onPressVideo}
                                                          videoList={this.props.course_video_list}/>}
            />;
        }
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        course_video_list: state.courseDetailReducer.course_video_list,
        loading: state.loadingReducer.loading,
        choose_video: state.courseDetailReducer.choose_video
    };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, CourseDetailAction, LoadingAction), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
