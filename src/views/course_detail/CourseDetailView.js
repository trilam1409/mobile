import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
    FlatList,
    TouchableWithoutFeedback,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import HTML from 'react-native-render-html';

import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';

import VideoChapterList from './VideoChapterList';
import {Icon} from 'react-native-elements';

const CourseDetailView = (props) => {

    const {videoList, onPressVideo, videoToPlay} = props;

    const {chapter} = videoList;

    const [fullscreen, setFullscreen] = useState(0);
    
    return (
        <View style={{flex: 1, alignSelf: 'stretch'}}>

            <LinearGradient start={{x: 0, y: 0}} end={{x: 1.2, y: 0}}
                            colors={['#444973', '#4C6785', '#5E7367']}>
                <SafeAreaView>
                    <Text style={Styles.courseName}>{videoList.course_name}</Text>
                </SafeAreaView>

            </LinearGradient>

            <SafeAreaView style={{flex: 1}}>
                <View style={[Styles.wrapVideo, fullscreen && Styles.fullScreen]}>

                    {!videoToPlay.type ?
                        <Video key={videoToPlay.id}
                               source={{uri: videoToPlay.content}}
                               style={Styles.backgroundVideo}
                               autoplay={true}
                               controls={true}
                               disableFocus={true}
                               resizeMode="contain"
                        /> : <View>
                            <ScrollView style={Styles.readingView}>
                                <HTML containerStyle={{paddingTop: 20, paddingBottom: 40}} html={videoToPlay.content}
                                      imagesMaxWidth={Dimensions.get('window').width}/>
                            </ScrollView>
                            <View style={Styles.readingExpand}>
                                <TouchableWithoutFeedback onPress={() => setFullscreen(!fullscreen)}>
                                    <Icon name={'expand'} type={'font-awesome'} color={'#fff'}/>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    }


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
        position: 'relative',
        marginBottom: 30,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * (9 / 16),
    },

    backgroundVideo: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

    readingView: {
        backgroundColor: '#fff',
        paddingLeft: 16,
        paddingRight: 16,
    },

    readingExpand: {
        position: 'absolute',
        right: 16,
        bottom: 5,
        backgroundColor: 'rgba(0,0,0,.5)',
        padding: 4,
        borderRadius: 4,
    },

    fullScreen: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginBottom: 0,
        zIndex: 10,
    },
});

export default CourseDetailView;
