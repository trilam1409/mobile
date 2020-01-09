import React from 'react';
import {Styles as MasterStyles} from '../styles/Master.styles';
import { View, ImageBackground, Text } from 'react-native';


export default function  MasterView(props) {
    const { content, haveHeader } = props;

    return (
        <View style={MasterStyles.container}>
            {
                haveHeader &&
                <View style={MasterStyles.header}>
                    <Text style={MasterStyles.headerTitleStyle}>{haveHeader}</Text>
                </View>
            }
            <ImageBackground
                style={MasterStyles.bgImage}
            >
                { content }
            </ImageBackground>
        </View>
    );
}

