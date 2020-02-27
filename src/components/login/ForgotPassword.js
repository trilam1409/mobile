import React, {Component} from 'react';
import MasterView from '../../views/Master';
import ForgotPasswordView from '../../views/login/ForgotPasswordView';
import {forgotPassword} from '../../services/ForgotPassword';
import {Alert} from 'react-native';

class ForgotPassword extends Component {

    componentDidMount(): void {
    }

    _submit = async (values) => {
        await forgotPassword(values).then((responseData) => {
            if (responseData.status.code != 200) {
                Alert.alert('Đã có lỗi xảy ra');
                return;
            }

            Alert.alert('Thông tin đã được gửi đến email');
            return;

        }).catch((error) => {
            Alert.alert('Fail', JSON.stringify(error))
        });



    }

    render() {
        return <MasterView navigation={this.props.navigation} haveBackButton={true} content={<ForgotPasswordView onSubmit={(values) => this._submit(values)}/>}/>;
    }
}

export default ForgotPassword;
