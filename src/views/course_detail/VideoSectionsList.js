import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import VideoList from './VideosList';

export default function VideoSectionsList(props){
    const { item, onPressVideo, playingVideo } = props;

    return (
        <View style={{ flexDirection: 'column', borderBottomWidth: 1, borderBottomColor: '#dae0e5' }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginTop: 10, marginLeft: 10, marginBottom: 5, color: '#0e46cd', fontWeight: 'bold', fontSize: 17 }}> {item.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                <View style={{ marginLeft: 10, flexDirection: 'row', flex: 1, alignContent: 'center', alignItems: 'center' }}>
                    <Icon name='timer' />
                    <Text style={{ marginLeft: 5 }} >Đã xem 10/2034 phút</Text>
                </View>
                {
                    item.number_of_videos &&
                    <View style={{ flexDirection: 'row', flex: 1, alignContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                        <Icon name='tv' />
                        <Text style={{ marginLeft: 5 }}>{item.number_of_videos} videos</Text>
                    </View>
                }

            </View>
            <VideoList playingVideo={playingVideo} onPressVideo={onPressVideo} videoList={item.videos} />
        </View>
    );
}
