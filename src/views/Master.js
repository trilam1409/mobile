import React from 'react';
import {Styles as MasterStyles} from '../styles/Master.styles';
import {View, ImageBackground, Text, SafeAreaView, StatusBar, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements';
import LinearGradientWrap from './LinearGradientUtils';


export default function MasterView(props) {
    const {navigation, content, haveHeader, haveBackButton = false} = props;

    return (
        <View style={MasterStyles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content"/>
            {
                haveBackButton &&
                <View style={{
                    position: 'absolute',
                    top: '5%',
                    left: '5%',
                    zIndex: 100,
                }}>
                    <TouchableHighlight activeOpacity={0} underlayColor={'transparent'} onPress={() => {
                        navigation.goBack();
                    }}
                    >
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                            <Icon name={'chevron-left'} color={'white'} size={24}/>
                        </View>
                    </TouchableHighlight>
                </View>
            }
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
            <View style={{flex: 1}}>
                {content}
            </View>
        </View>
    );
}

