import React, {Component} from 'react';
import Master from '../../views/Master';
import SetPasswordView from '../../views/login/SetPasswordView';
import {setPassword} from '../../services/SetPassword';
import {Alert} from 'react-native';


class SetPassword extends Component {

    componentDidMount(): void {

    }

    _submit = async (values) => {
        await setPassword(values).then((responseData) => {
            if (responseData.status.code != 200) {
                Alert.alert('Đã có lỗi xảy ra');
                return;
            }

            this.props.navigation.navigate('Login');

            return;

        }).catch((error) => {
            Alert.alert('Fail', JSON.stringify(error));
        });
    };


    render(): React.ReactNode {
        return <Master content={<SetPasswordView onSubmit={(values) => this._submit(values)}/>}/>;
    }
}

export default SetPassword;
