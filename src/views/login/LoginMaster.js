import React, {useState} from 'react';
import {Animated, ImageBackground, SafeAreaView, View, Dimensions, StyleSheet} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const LoginMaster = (props) => {

    return (
        <ImageBackground source={require('../../../assets/images/loginScreen.png')} style={Styles.imageBackground}>
            <SafeAreaView style={{flex: 1}}>
                <View style={Styles.loginWrap}>
                    <View style={{width: '100%'}}>
                        {props.children}
                    </View>
                    <View style={Styles.logo}>
                        <AutoHeightImage width={150} source={require('../../../assets/images/vnwl_logo_white.png')}/>
                    </View>
                </View>
            </SafeAreaView>

        </ImageBackground>
    );
};

const Styles = StyleSheet.create({
    imageBackground: {
        width: Dimensions.get('window').width,
        flex: 1,

    },

    loginWrap: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    logo: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 20
    },
});

export default LoginMaster;
