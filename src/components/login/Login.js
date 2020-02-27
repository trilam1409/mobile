import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import MasterView from '../../views/Master';
import LoginView from '../../views/login/LoginView';
import LoadingComponent from '../Loading';
import * as LoginAction from '../../actions/Login';
import * as CacheService from '../../services/Cache';
import * as CredentialsUtil from '../../utils/Credentials';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    _submit = async (values) => {

        await this.props
            .loginAccount(values)
            .then((result) => {
                CacheService.storeToCache({ key: CredentialsUtil.ACCESS_TOKEN_CACHE_KEY, data: result.access_token }, {key: CredentialsUtil.USER_NAME, data: result.username}).then(() => {
                this.props.navigation.navigate('App');

            });
        }).catch((error) => {
            Alert.alert('Fail', JSON.stringify(error));
        });
    }

    _forgotPassword = () => {
        this.props.navigation.navigate('ForgotPassword');
    }

    render() {
        if (this.props.loading) {
            return <LoadingComponent />;
        } else {
            return <MasterView content={<LoginView onSubmit={(values) => this._submit(values)} forgotPassword={this._forgotPassword} />}/>
        }
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        login_data: state.loginReducer.login_data,
    };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, LoginAction), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
