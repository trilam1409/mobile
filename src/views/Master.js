import React from 'react';
import {Styles as MasterStyles} from '../styles/Master.styles';
import {View, ImageBackground, Text, SafeAreaView, StatusBar} from 'react-native';
import LinearGradientWrap from './LinearGradientUtils';


export default function MasterView(props) {
    const {content, haveHeader} = props;

    return (
        <View style={MasterStyles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            {
                haveHeader &&
                <LinearGradientWrap>
                <View style={MasterStyles.header}>
                    <SafeAreaView>
                        <Text style={MasterStyles.headerTitleStyle}>{haveHeader}</Text>
                    </SafeAreaView>
                </View>
                </LinearGradientWrap>
            }
            <ImageBackground
                style={MasterStyles.bgImage}
            >
                {content}
            </ImageBackground>
        </View>
    );
}

