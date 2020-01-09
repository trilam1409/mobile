import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { View, Image } from 'react-native';

import { Input, Button, Card } from 'react-native-elements';

import SkyTextInput from './fields/SkyTextInput';
import { Styles } from '../styles/Master.styles';
import { HEADER_COLOR } from '../config/colors';

const required = value => value ? undefined : 'Required';

function LoginForm(props) {
  return (
        <View style={Styles.innerContainer} keyboardShouldPersistTaps={'handled'}>
            <View style={Styles.topContainer}>
                <View style={{ alignItems: 'center', alignSelf: 'center', marginTop: 100 }}>
                    <Image style={{ height:40, width:152 }} source={require('../../assets/images/eduworks_white_logo.png')}/>
                </View>
            </View>

            <View style={Styles.bottomContainer}>
            </View>

            <View style={Styles.loginContainer}>
                <Card>
                  <Field
                    name={'username'}
                    component={SkyTextInput}
                    placeholder={'Điền email của bạn'}
                    placeholderTextColor={'#bab6ae'}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    validate={[ required ]}
                  />
                  <Field
                    name={'password'}
                    component={SkyTextInput}
                    placeholder={'Điền mật khẩu của bạn'}
                    placeholderTextColor={'#bab6ae'}
                    secureTextEntry
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    validate={[ required ]}

                  />
                </Card>

                <View
                    style={{ marginTop: 25, alignItems: 'stretch' }}
                >
                    <Button
                        link
                        backgroundColor={HEADER_COLOR}
                        raised
                        disabled={props.submitting}
                        onPress={props.handleSubmit}
                        icon={{ name: 'send' }}
                        textStyle={{ fontSize: 18, fontWeight: '500' }}
                        title={'Đăng nhập'}
                        containerStyle={{ alignItems: 'stretch', alignSelf: 'stretch' }}
                    />
                </View>
            </View>
        </View>
  );
}

export default reduxForm({
  form: 'login'
})(LoginForm);
