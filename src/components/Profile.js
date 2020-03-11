import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MasterView from '../views/Master';
import ProfileView from '../views/profile/ProfileView';
import * as LogoutAction from '../actions/Logout';
import {removeFromCache, getFromCache} from '../services/Cache';
import * as CredentialsUtil from '../utils/Credentials';

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
    }

    _onMenuItemPress = (content, title) => {
        this.props.navigation.navigate('StaticScreen', {content: content, title: title});
    };

    _logout = async () => {
        await removeFromCache(CredentialsUtil.ACCESS_TOKEN_CACHE_KEY).then(() =>
            this.props.navigation.navigate('Login')
        );
    };

    render() {
        return <MasterView content={<ProfileView navigate={this.props.navigation.navigate}
                                                 onLogoutPress={this._logout}
                                                 onMenuItemPress={this._onMenuItemPress}
                                                 myProfile={this.props.my_profile}
        />}/>;
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        my_profile: state.myCoursesReducer.my_profile,
    };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, LogoutAction), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
