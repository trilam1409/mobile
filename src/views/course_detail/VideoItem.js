import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const VideoItem = (props) => {

    const {item, onPressVideo, videoToPlay} = props;

    const {id, watched} = item.item;

    const [playing, setPlaying] = useState(0);

    useEffect(() => {
        setPlaying(0);

        if (videoToPlay.id == id) {
            setPlaying(1)
        }

    });


    return (
        <TouchableOpacity onPress={() => {
            onPressVideo(item.item);
        }}>
            <Text
                style={[Styles.lessonItem,
                    watched == 'progress' && Styles.lessonItemInProgress,
                    watched == 'done' && Styles.lessonItemInDone,
                    playing && Styles.lessonItemPlaying]}>{item.index + 1}</Text>
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({

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

export default VideoItem;
