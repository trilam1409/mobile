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
                        initialValues={{username: '', password: ''}}
                        validationSchema={
                            yup.object().shape({
                                username: yup
                                    .string()
                                    .email('Vui lòng nhập đúng định dạng email')
                                    .required('Vui lòng nhập email'),
                                password: yup
                                    .string()
                                    .required('Vui lòng nhập mật khẩu'),
                            })}
                        onSubmit={(values) => onSubmit(values)}
                    >
                        {({handleChange, handleBlur, handleSubmit, values, errors, isSubmitting, setFieldTouched, touched}) => (
                            <View style={loginStyles.wrapForm}>


                                <FieldInputPipe onChangeText={handleChange('username')}
                                                onBlur={() => setFieldTouched('username')}
                                                value={values.username}
                                                placeholder={'Nhập email của bạn'}
                                                errors={errors.username}
                                                touched={touched.username}
                                />

                                <FieldInputPipe onChangeText={handleChange('password')}
                                                onBlur={() => setFieldTouched('password')}
                                                value={values.password}
                                                secureTextEntry={true}
                                                placeholder={'Nhập mật khẩu của bạn'}
                                                errors={errors.password}
                                                touched={touched.password}/>


                                <Button containerStyle={loginStyles.wrapButton} style={loginStyles.button}
                                        onPress={handleSubmit} title="Đăng nhập"
                                        loading={isSubmitting}
                                        disabled={isSubmitting}
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
