import React, { Component } from 'react';
import {
    View,
    Dimensions
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import { Style as CourseDetailStyle } from "../styles/CourseDetail.styles";
import Orientation from 'react-native-orientation-locker';

export default class FullScreenVideo extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount () {
        Orientation.lockToLandscapeLeft();
    }

    componentDidMount() {
        Orientation.lockToLandscapeLeft();
    }

    componentWillUnmount () {
        Orientation.lockToPortrait();
    }

    onLayout(e) {
        const { width, height } = Dimensions.get('window')
    }

    goBack() {
        this.props.navigation.goBack();
        Orientation.lockToPortrait();
    }

    _onLoadFullscreen() {
        this.videoPlayer.renderFullscreen();
    }

    render() {
        const { videoToPlay } = this.props;
        return (<View onLayout={this.onLayout.bind(this)} style={{flex:1}}>
                    <VideoPlayer
                        ref={ref => this.videoPlayer = ref}
                        source={{uri: videoToPlay}}
                        style={CourseDetailStyle.fullscreenVideoContainer}
                        toggleResizeModeOnFullscreen={false}
                        videoStyle={CourseDetailStyle.fullscreenVideoContainer}
                        onLoad={this._onLoadFullscreen.bind(this)}
                        resizeMode={'cover'}
                        onBack={this.goBack.bind(this)}
                        disableFullscreen={true}
                    />
                </View>);
    }

}
