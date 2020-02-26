import React, {useState} from 'react';
import LoginMaster from '../login/LoginMaster';
import {Animated, KeyboardAvoidingView, View, Alert} from 'react-native';
import {Styles as loginStyles} from '../../styles/Login.styles';
import {Button, Text} from 'react-native-elements';
import {Formik} from 'formik';
import * as yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';

import FieldInputPipe from '../fields/FieldInputPipe';

const ForgotPasswordView = (props) => {

    const {onSubmit} = props;

    const [slideInDown] = useState(new Animated.ValueXY({x: 0, y: 70}));
    const [fadeIn] = useState(new Animated.Value(0));
    const [indicatorBtn, setIndicatorBtn] = useState(0);

    const _handleSubmit = async () => {
        setIndicatorBtn(1);
        await onSubmit();
        setIndicatorBtn(0);
        Alert.alert('Thông tin đã được gửi qua email.');

    };


    React.useEffect(() => {
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
                <KeyboardAvoidingView behavior={'position'} style={{width: '100%'}}>

                    {/*<Animated.View style={[slideInDown.getLayout(), {opacity: fadeIn}]}>*/}
                    <Text style={[loginStyles.title, loginStyles.textShadow]}>Quên mật khẩu</Text>
                    {/*</Animated.View>*/}

                    <Formik
                        initialValues={{email: ''}}
                        validationSchema={
                            yup.object().shape({
                                email: yup
                                    .string()
                                    .email('Vui lòng nhập đúng định dạng email')
                                    .required('Vui lòng nhập email'),
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

                                <Button containerStyle={loginStyles.wrapButton} style={loginStyles.button}
                                        onPress={handleSubmit} title="Gửi lại mật khẩu"
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

            </View>
        </LoginMaster>
    );
};

export default ForgotPasswordView;
