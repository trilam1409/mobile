import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Card, Icon, ListItem } from 'react-native-elements';
import {connect} from "react-redux";
import { Style as CourseDetailStyle } from "../../styles/CourseDetail.styles";

const unWatchVideoStyle = {
    name: 'av-timer',
    color: '#7ed321'
};

const watchingVideoStyle = {
    name: 'av-timer',
    color: '#d43b16'
};

const watchedVideoStyle = {
    name: 'av-timer',
    color: '#f7f1a6'
};

class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { videoList, onPressVideo } = this.props;

        return (
            <View>
                {
                    videoList.map((l, i) => (
                        <ListItem
                            onPress={() => onPressVideo(l)}
                            hideChevron
                            key={i}
                            leftIcon={(this.props.choose_video == l) ? watchingVideoStyle : (l.watched ? watchedVideoStyle : unWatchVideoStyle)}
                            disabled={(this.props.choose_video == l)}
                            disabledStyle={CourseDetailStyle.itemDisableStyle}
                            title={l.name}
                            containerStyle={{borderBottomColor: 'transparent', borderBottomWidth: 0}}
                        />
                    ))
                }
            </View>
        );
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        choose_video: state.courseDetailReducer.choose_video,
    };
}

export default connect(mapStateToProps)(VideoList);
