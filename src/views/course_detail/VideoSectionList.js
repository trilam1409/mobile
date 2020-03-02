import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import VideoItem from './VideoItem';

const VideoSectionList = (props) => {
    const {item, onPressVideo, videoToPlay} = props;


    const {section_name, lesson} = item.item;

    return (
        <View style={Styles.sectionContainer}>
            <Text style={Styles.sectionName}>{section_name}</Text>

            <FlatList
                bounces={false}
                data={lesson}
                style={{flexDirection: 'row'}}
                renderItem={(item) => {
                    return <VideoItem item={item} onPressVideo={onPressVideo} videoToPlay={videoToPlay}/>
                }}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    );
};

const Styles = StyleSheet.create({
    sectionContainer: {
        padding: 15,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ededed',
    },

    sectionName: {
        paddingBottom: 12,
    },

    lessonItem: {
        borderWidth: 1,
        borderColor: '#c9c9c9',
        color: '#c9c9c9',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 12,
    },

    lessonItemInProgress: {
        borderColor: '#e6c60d',
        color: '#e6c60d',
    },

    lessonItemInDone: {
        borderColor: '#7ed321',
        color: '#7ed321',
    },

    lessonItemPlaying: {
        borderColor: '#d43b16',
        color: '#d43b16',
    },
});

export default VideoSectionList;
