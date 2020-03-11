import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableWithoutFeedback} from 'react-native';
import Collapse from 'react-native-collapsible';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import VideoSectionList from './VideoSectionList';

const VideoChapterList = (props) => {
    const {item, onPressVideo, playingVideo, videoToPlay} = props;

    const {chapter_name, number_videos, section} = item.item;


    let [collapse, setCollapse] = useState(!item.index ? false : true);


    return (
        <View style={Styles.chapterContainer}>

            <TouchableWithoutFeedback onPress={() => setCollapse(!collapse)}>
                <View style={Styles.chapterInner}>

                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                    colors={['#444973', '#4C6785', '#5E7367']}>
                        <Text style={Styles.indexChapter}>{item.index + 1}</Text>
                    </LinearGradient>
                    <View style={Styles.chapterNameWrap}>
                        <Text style={Styles.textName} numberOfLines={1} ellipsizeMode='tail'>{chapter_name}</Text>
                        <Text style={Styles.textVideo}>{number_videos} video</Text>
                    </View>


                </View>
            </TouchableWithoutFeedback>

            <Collapse collapsed={collapse}>

                <FlatList data={section} renderItem={(item) => {
                    return <VideoSectionList item={item} onPressVideo={onPressVideo} videoToPlay={videoToPlay}/>;
                }}
                          keyExtractor={(item, index) => index.toString()}/>
            </Collapse>
        </View>

    );
};

const Styles = StyleSheet.create({
    chapterContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 30,
    },
    chapterInner: {
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: '#fff',
    },

    chapterNameWrap: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 20,
        width: wp(90),

    },

    indexChapter: {
        width: wp(10),
        color: '#fff',
        textAlign: 'center',
        paddingTop: 10,
    },

    textName: {
        fontSize: wp(3.5),
        paddingBottom: 5,
    },

    textVideo: {
        color: '#808080',
        fontSize: wp(3),
    },
});

export default VideoChapterList;

// <VideoList playingVideo={playingVideo} onPressVideo={onPressVideo} videoList={item.videos}/>
