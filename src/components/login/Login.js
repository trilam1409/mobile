import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import MasterView from '../../views/Master';
import LoginView from '../../views/login/LoginView';
import LoadingComponent from '../Loading';
import * as LoginAction from '../../actions/Login';
import * as LoadingAction from '../../actions/Loading';
import * as CacheService from '../../services/Cache';
import * as CredentialsUtil from '../../utils/Credentials';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    _submit(values) {
        this.props.showLoading(true);
        this.props
            .loginAccount(values)
            .then((result) => {
                CacheService.storeToCache({ key: CredentialsUtil.ACCESS_TOKEN_CACHE_KEY, data: result.access_token }, {key: CredentialsUtil.USER_NAME, data: result.username}).then(() => {
                this.props.showLoading(false);
                this.props.navigation.navigate('App');

            });
        }).catch((error) => {
            this.props.showLoading(false);
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
        loading: state.loadingReducer.loading
    };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, LoginAction, LoadingAction), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
