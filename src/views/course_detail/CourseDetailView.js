import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {FlatList, SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
import {Text} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';

import VideoChapterList from './VideoChapterList';

const CourseDetailView = (props) => {

    const {videoList, onPressVideo, videoToPlay} = props;

    const {chapter} = videoList;

    console.log('list', chapter[0].section[0].lesson[0]);

    useEffect(() => {
        _videoRender();
    })

    const _getVideo = () => {

        if (!videoList) {
            return;
        }

        console.log('get');

        const video = chapter[0].section[0].lesson[0];

        console.log('video', video);
        console.log('toplay', videoToPlay);
        return (Object.entries(videoToPlay).length ? videoToPlay : video);
    };


    const _videoRender = () => {
        let videoUrl = _getVideo().video_url;

        console.log('getvideo', videoUrl);

        return <Video source={{uri: videoUrl}}
                      style={Styles.backgroundVideo}
                      autoplay={true}
                      controls={true}
                      disableFocus={true}

                      fullscreen={true}
                      resizeMode="cover"

        />;


    };


    return (
        <View style={{flex: 1, alignSelf: 'stretch'}}>

            <LinearGradient start={{x: 0, y: 0}} end={{x: 1.2, y: 0}}
                            colors={['#444973', '#4C6785', '#5E7367']}>
                <SafeAreaView>
                    <Text style={Styles.courseName}>{videoList.course_name}</Text>
                </SafeAreaView>

            </LinearGradient>

            <SafeAreaView style={{flex: 1}}>
                <View style={Styles.wrapVideo}>
                    {_videoRender()}
                </View>


                <FlatList data={chapter} renderItem={(item) => {
                    return <VideoChapterList item={item} onPressVideo={onPressVideo} videoToPlay={videoToPlay}/>;
                }}
                          keyExtractor={(item, index) => index.toString()}/>

            </SafeAreaView>

        </View>
    );
};

const Styles = StyleSheet.create({
    courseName: {
        color: '#fff',
        fontSize: 20,
        paddingTop: 30,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'center',
        fontWeight: '600',
    },

    wrapVideo: {
        marginBottom: 30,
        minWidth: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').width * (9 / 16),
    },

    backgroundVideo: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default CourseDetailView;
