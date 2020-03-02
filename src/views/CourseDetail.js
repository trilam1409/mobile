import React, { Component } from 'react';

import {
    View,
    ScrollView,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native';

import { ListItem, Text } from 'react-native-elements';

import YouTube from 'react-native-youtube';
import VideoPlayer from 'react-native-video-controls';
import * as Credentials from "../config/credentials";
import { Style as CourseDetailStyle } from '../styles/CourseDetail.styles';
import VideoSectionsList from './course_detail/VideoSectionList';

export default class CourseDetail extends Component {
    constructor(props) {
        console.disableYellowBox = true;
        super(props);
    }

    _getVideo() {
        const { videoList, videoToPlay } = this.props;

        if(!videoList || videoList.length <= 0) {
            return null;
        }

        const videos = videoList[0].videos;
        return videoToPlay ? videoToPlay : videos[0];
    }

    _youtubeRender() {
        const { videoList, videoToPlay } = this.props;
        const videoIds = videoList.map((value) => value.video_id);

        return <YouTube
            videoId={this._getVideo().video_url}
            videoIds={videoIds} // The YouTube video ID
            apiKey={Credentials.YOUTUBE_API_KEY}
            play={true}             // control playback of video with true/false
            fullscreen={false}      // control whether the video should play in fullscreen or inline
            loop={true}             // control whether the video should loop when ended
            controls={1}
            style={{ alignSelf: 'stretch', height: 300 }}
        />
    }

    _onEnterFullScreen() {
        this.props.navigate('FullScreenVideo', { videoToPlay: this._getVideo().video_url });

        // hacky here, when clicking on the toggle fullscreen button,
        // we need to set toggle to false unless it will keep the current fullscreen state
        // and we will miss 1 step to enter fullscreen again
        if(this.videoPlayer.state.isFullscreen) {
            this.videoPlayer._toggleFullscreen();
        }
    }

    _videoRender() {
        return  (this._getVideo() && this._getVideo().video_url) && <VideoPlayer
                    ref={ref => this.videoPlayer = ref}
                    autoplay={true}
                    source={{ uri: this._getVideo().video_url }}   // Can be a URL or a local file.
                    style={CourseDetailStyle.videoContainer}
                    toggleResizeModeOnFullscreen={true}
                    onEnterFullscreen={this._onEnterFullScreen.bind(this)}
                    disableBack={true}
                />
    }

    _videoTitleRender() {
        return (this._getVideo() && this._getVideo().video_url) && <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#dae0e5'}}>
                    <Text style={{ color: '#4a4a4a', fontWeight: 'bold', margin: 20, fontSize: 17 }}>{this._getVideo() && this._getVideo().name}</Text>
               </View>;
    }

    render() {
        const { videoList, onPressVideo } = this.props;

        return <View style={{ flex: 1, alignSelf: 'stretch' }} >
                {this._videoRender()}

                {this._videoTitleRender()}

                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={videoList}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        directionalLockEnabled
                        renderItem={({item, index}) => (
                            <TouchableWithoutFeedback>
                                <View>
                                    <VideoSectionsList playingVideo={this._getVideo.bind(this)} item={item} onPressVideo={onPressVideo}/>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    />
            </View>;
    }
}

