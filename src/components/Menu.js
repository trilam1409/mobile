import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MasterView from '../views/Master';
import { createStackNavigator } from 'react-navigation';
import MenuView from '../views/Menu';
import * as LogoutAction from '../actions/Logout';
import {Alert} from "react-native";

class Menu extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    _onMenuItemPress(content, title) {
        this.props.navigation.navigate('StaticScreen', {content: content, title: title});
    }

    _logout() {
        this.props.logoutAccount().then(() => {
            this.props.navigation.navigate('Login');
        }).catch((e) => {
            Alert.alert('Fail', JSON.stringify(e));
        })
    }

    render() {
        return <MasterView navigate={this.props.navigation.navigate}
                           haveHeader={'TRANG CÁ NHÂN'}
                           content={<MenuView navigate={this.props.navigation.navigate}
                           onLogoutPress={this._logout.bind(this)}
                           onMenuItemPress={this._onMenuItemPress.bind(this)}
                           />} />;
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {};
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, LogoutAction), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
