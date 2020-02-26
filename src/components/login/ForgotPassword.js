import React, {Component} from 'react';
import MasterView from '../../views/Master';
import ForgotPasswordView from '../../views/login/ForgotPasswordView';
import {forgotPassword} from '../../services/ForgotPassword';

class ForgotPassword extends Component {

    componentDidMount(): void {
    }

    _submit = async () => {
        await forgotPassword();
    }

    render() {
        return <MasterView navigation={this.props.navigation} haveBackButton={true} content={<ForgotPasswordView onSubmit={this._submit}/>}/>;
    }
}

export default ForgotPassword;
