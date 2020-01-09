// full code here --> https://github.com/bizz84/redux-navigation-color-picker
import React from 'react';
import { connect } from 'react-redux';
import Routes from '../config/routes';

import {
    createReactNavigationReduxMiddleware,
    createReduxContainer
} from 'react-navigation-redux-helpers';

export const AppNavigator = Routes;
const navigationMiddleware = createReactNavigationReduxMiddleware("root", state => state.nav);
const addListener = createReduxContainer('root');

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator
        navigation={{ dispatch, state: nav, addListener }}
    />
);

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
