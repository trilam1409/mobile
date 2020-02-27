/* core */
import React, {Component} from 'react';
import {SwitchNavigator, StackNavigator, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {Icon} from 'react-native-elements';
import {ACTIVE_TAB_COLOR} from '../config/colors';

/* Screens */
import Welcome from '../components/Welcome';
import CourseDetail from '../components/CourseDetail';
import Login from '../components/login/Login';
import AuthLoading from '../components/AuthLoading';
import Menu from '../components/Menu';
import MyCourses from '../components/MyCourses';
import FullScreenVideo from '../components/FullScreenVideo';
import StaticScreen from '../components/StaticScreen';
import ForgotPassword from '../components/login/ForgotPassword';
import SetPassword from '../components/login/SetPassword';

const appNav = createBottomTabNavigator({
    // Welcome: {
    //     screen: Welcome,
    //     navigationOptions: {
    //         tabBarLabel:"Home",
    //         tabBarIcon: ({ tintColor }) => <Icon name={"home"} size={30} color={tintColor} />,
    //         swipeEnabled: false
    //     }
    // },
    MyCourses: {
        screen: MyCourses,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: 'MyCourses',
            tabBarIcon: ({tintColor}) => <Icon type={'material-community'} name={'library-video'} size={25}
                                               color={tintColor}/>,
            swipeEnabled: false,
        }),
    },
    Menu: {
        screen: Menu,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: 'Menu',
            tabBarIcon: ({tintColor}) => <Icon type={'ionicon'} name={'md-settings'} size={25} color={tintColor}/>,
            swipeEnabled: false,
        }),
    },
}, {
    tabBarOptions: {
        showIcon: true,
        showLabel: true,
        indicatorStyle: {
            backgroundColor: ACTIVE_TAB_COLOR,
            height: 43,
        },
        activeTintColor: '#0283df',
        inactiveTintColor: 'grey',
        pressColor: '#E4E4E4',
        style: {
            backgroundColor: 'white',
            paddingTop: 10,
            height: 53,
            borderTopColor: 'transparent',
        },
    },
});

const authNav = createStackNavigator({

    Login: {
        screen: Login,
        headerMode: 'none',
        navigationOptions: ({navigation}) => ({headerShown: false}),
    },

    ForgotPassword: {
        screen: ForgotPassword,
        headerMode: 'none',
        navigationOptions: ({navigation}) => ({headerShown: false}),
    },

    SetPassword: {
        screen: SetPassword,
        headerMode: 'none',
        navigationOptions: ({navigation}) => ({headerShown: false}),
    }


});

const appStackNav = createStackNavigator({
    App: {
        screen: appNav,
        headerMode: 'none',
        navigationOptions: ({navigation}) => ({
            headerShown: false,
        }),
    },
    CourseDetail: {
        screen: CourseDetail,
        headerMode: 'none',
        navigationOptions: ({navigation}) =>
            ({headerShown: false}),
    },
    FullScreenVideo: {
        screen: FullScreenVideo,
        headerMode: 'none',
        navigationOptions: ({navigation}) => ({headerShown: false}),
    },
    StaticScreen: {
        screen: StaticScreen,
        headerMode: 'none',
        navigationOptions: ({navigation}) => ({headerShown: false}),
    },
}, {
    mode: 'card',
    navigationOptions: params => ({
        gesturesEnabled: true,
        gesturesDirection: 'inverted',
    }),

});

const switchNav = createSwitchNavigator({
    AuthLoading: AuthLoading,
    Auth: authNav,
    App: appNav,
    AppStack: appStackNav,
}, {
    initialRouteName: 'AuthLoading',
});

export default switchNav;
