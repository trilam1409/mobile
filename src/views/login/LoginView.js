import React, {useState, useEffect} from 'react';
import {
    View,
    Animated,
    KeyboardAvoidingView,
    TouchableOpacity, Alert,
} from 'react-native';
import {Button} from 'react-native-elements';

import {Styles as loginStyles} from '../../styles/Login.styles';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Text} from 'react-native-elements';

import LoginMaster from './LoginMaster';
import FieldInputPipe from '../fields/FieldInputPipe';

const LoginView = (props) => {

    const {onSubmit, forgotPassword} = props;

    const [indicatorBtn, setIndicatorBtn] = useState(0);

    const _handleSubmit = async () => {
        setIndicatorBtn(1);
        await onSubmit();
    };


    const [slideInDown] = useState(new Animated.ValueXY({x: 0, y: 70}));
    const [fadeIn] =useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            slideInDown,
            {
                toValue: {x: 0, y: 0},
                duration: 800,
            },
        ).start();

        Animated.timing(
            fadeIn,
            {
                toValue: 1,
                duration: 800,
            },
        ).start();
    }, []);

    return (

        <LoginMaster>
            <View style={loginStyles.loginContainer}>
                <KeyboardAvoidingView behavior={'position'}>

                    <Animated.View style={[slideInDown.getLayout(), {opacity: fadeIn}]}>
                        <Text style={[loginStyles.title, loginStyles.textShadow]}>Đăng nhập để sử dụng</Text>
                        <Text style={[loginStyles.title, loginStyles.textBold, loginStyles.textShadow]}>Vietnamworks
                            Learning for Corp</Text>
                    </Animated.View>

                    <Formik
                        initialValues={{email: '', password: ''}}
                        validationSchema={
                            yup.object().shape({
                                email: yup
                                    .string()
                                    .email('Vui lòng nhập đúng định dạng email')
                                    .required('Vui lòng nhập email'),
                                password: yup
                                    .string()
                                    .required('Vui lòng nhập mật khẩu'),
                            })}
                        onSubmit={_handleSubmit}
                    >
                        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                            <View style={loginStyles.wrapForm}>


                                <FieldInputPipe onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                value={values.email}
                                                placeholder={'Nhập email của bạn'}
                                                errors={errors.email}/>

                                <FieldInputPipe onChangeText={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                                value={values.password}
                                                secureTextEntry={true}
                                                placeholder={'Nhập mật khẩu của bạn'}
                                                errors={errors.password}/>


                                <Button containerStyle={loginStyles.wrapButton} style={loginStyles.button}
                                        onPress={handleSubmit} title="Đăng nhập"
                                        loading={indicatorBtn ? true : false}
                                        disabled={indicatorBtn ? true : false}
                                        ViewComponent={LinearGradient} // Don't forget this!
                                        linearGradientProps={{
                                            colors: ['#0283df', '#76bdf0'],
                                            start: {x: 0, y: 0.5},
                                            end: {x: 1, y: 0.5},
                                        }}/>
                            </View>
                        )}
                    </Formik>


                </KeyboardAvoidingView>
                <TouchableOpacity onPress={forgotPassword}>
                    <Text style={[loginStyles.textSubTitle, loginStyles.textShadow]}>Quên mật khẩu?</Text>
                </TouchableOpacity>

            </View>
        </LoginMaster>


    );
}

export default LoginView;
