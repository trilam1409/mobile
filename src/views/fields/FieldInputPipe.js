import React from 'react';
import {Input, Text} from 'react-native-elements';
import {Styles as loginStyles} from '../../styles/Login.styles';
import {View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const FieldInputPipe = (props) => {

    const {onChangeText, onBlur, value, placeholder, errors, secureTextEntry = false} = props;

    return (
        <View>
            <Input
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                containerStyle={[Styles.wrapInput]}
                inputContainerStyle={Styles.containerInput}
                inputStyle={Styles.input}
            />
            {errors &&
            <Text style={Styles.textError}>{errors}</Text>
            }
        </View>
    );
};

const Styles = StyleSheet.create({

        wrapInput: {
            backgroundColor: '#fff',
            borderRadius: 30,
            padding: 2,
            marginTop: 20,
            paddingLeft: 16,
            paddingRight: 16,
        },

        textError: {
            fontSize: wp(3.5),
            paddingLeft: 20,
            color: '#ff8a18',
            paddingTop: 10,
            textShadowColor: 'rgba(255, 255, 255, 0.5)',
            textShadowOffset: {width: 0, height: 0},
            textShadowRadius: 5,
        },

        containerInput: {
            borderBottomWidth: 0,

        },

        input: {
            fontSize: wp(4),
        },
    },
);

export default FieldInputPipe;
