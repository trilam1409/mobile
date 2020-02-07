import React, {useState, useEffect} from 'react';
import {reduxForm, Field} from 'redux-form';
import {View, KeyboardAvoidingView, Animated} from 'react-native';
import {Input, Button, Card} from 'react-native-elements';
import AutoHeightImage from 'react-native-auto-height-image';

import SkyTextInput from './fields/SkyTextInput';
import {Styles} from '../styles/Master.styles';
import {HEADER_COLOR} from '../config/colors';
import LinearGradientWrap from './LinearGradientUtils';
import LinearGradient from 'react-native-linear-gradient';

const required = value => value ? undefined : 'Required';

function LoginForm(props) {

    const [slideInDown] = useState(new Animated.ValueXY({x: 0, y: 200}));
    const [fadeIn] = useState(new Animated.Value(0));

    React.useEffect(() => {
        Animated.timing(
            slideInDown,
            {
                toValue: {x: 0, y: 0},
                duration: 1500,
            },
        ).start();

        Animated.timing(
            fadeIn,
            {
                toValue: 1,
                duration: 1500,
            },
        ).start();
    }, []);


    return (
        <View style={Styles.innerContainer} keyboardShouldPersistTaps={'handled'}>

            <LinearGradientWrap styleContainer={Styles.topContainer}>
                <Animated.View style={[slideInDown.getLayout(), {opacity: fadeIn}]}>
                    <View style={{alignItems: 'center', alignSelf: 'center', marginTop: 100}}>
                        <AutoHeightImage width={200} source={require('../../assets/images/vnwl_logo_white.png')}/>
                    </View>
                </Animated.View>

            </LinearGradientWrap>


            <View style={Styles.bottomContainer}>
            </View>

            <KeyboardAvoidingView style={Styles.loginContainer} position>
                <Card containerStyle={{borderRadius: 4}}>
                    <Field
                        name={'username'}
                        component={SkyTextInput}
                        placeholder={'Điền email của bạn'}
                        placeholderTextColor={'#bab6ae'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        validate={[required]}
                    />
                    <Field
                        name={'password'}
                        component={SkyTextInput}
                        placeholder={'Điền mật khẩu của bạn'}
                        placeholderTextColor={'#bab6ae'}
                        secureTextEntry
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                        validate={[required]}

                    />
                </Card>

                <View
                    style={{marginTop: 25, alignItems: 'stretch'}}
                >
                    <Button
                        ViewComponent={LinearGradient} // Don't forget this!
                        linearGradientProps={{
                            colors: ['#0283df', '#76bdf0'],
                            start: {x: 0, y: 0.5},
                            end: {x: 1, y: 0.5},
                        }}
                        link
                        raised
                        disabled={props.submitting}
                        onPress={props.handleSubmit}
                        icon={{name: 'send', color: 'white'}}
                        textStyle={{fontSize: 18, fontWeight: '500'}}
                        title={'Đăng nhập'}
                        containerStyle={{alignItems: 'stretch', alignSelf: 'stretch', marginRight: 15, marginLeft: 15}}
                    />
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

export default reduxForm({
    form: 'login',
})(LoginForm);
