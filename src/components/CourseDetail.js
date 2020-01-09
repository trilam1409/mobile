import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MasterView from '../views/Master';
import CourseDetailView from '../views/CourseDetail';
import * as CourseDetailAction from '../actions/CourseDetail';
import * as LoadingAction from "../actions/Loading";
import LoadingComponent from "../components/Loading";
import { HEADER_COLOR } from '../config/colors';

class CourseDetail extends Component {
    static navigationOptions = ({ navigation }) => ({
        'title': navigation.state.params.name,
        headerTitleStyle: {
            color: 'white'
        },
        headerStyle:{
            backgroundColor:HEADER_COLOR,
        },
        headerTintColor: 'white'
    });

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._getCourseVideos();
    }

    _getCourseVideos() {
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        this.props.showLoading(true);

        this.props.getCourseVideoList(id).then((data) => {
            this.props.showLoading(false);
        }).catch((error) => {
            this.props.showLoading(false);
        })
    }

    onPressVideo(item) {
        this.props.chooseVideo(item);
    }

    render() {
        if (this.props.loading) {
            return <LoadingComponent />;
        } else {
            return <MasterView navigate={this.props.navigation.navigate}
                               content={<CourseDetailView videoToPlay={this.props.choose_video}
                                                          navigate={this.props.navigation.navigate}
                                                          onPressVideo={this.onPressVideo.bind(this)}
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
