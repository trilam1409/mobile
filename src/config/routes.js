/* core */
import React, { Component } from 'react';
import { SwitchNavigator, StackNavigator, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { Icon } from 'react-native-elements';
import { ACTIVE_TAB_COLOR } from '../config/colors';
import { Animated, Easing } from 'react-native';
/* Screens */
import Welcome from '../components/Welcome';
import CourseDetail from '../components/CourseDetail';
import Login from '../components/Login';
import AuthLoading from '../components/AuthLoading';
import Menu from '../components/Menu';
import MyCourses from '../components/MyCourses';
import FullScreenVideo from '../components/FullScreenVideo';
import StaticScreen from '../components/StaticScreen';

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
        navigationOptions: {
            tabBarLabel:"MyCourses",
            tabBarIcon: ({ tintColor }) => <Icon name={"book"} size={30} color={tintColor} />,
            swipeEnabled: false
        }
    },
    Menu: {
        screen: Menu,
        navigationOptions: {
            tabBarLabel:"Menu",
            tabBarIcon: ({ tintColor }) => <Icon name={"accessibility"} size={30} color={tintColor} />,
            swipeEnabled: false
        }
    }
}, {
    tabBarOptions: {
        showIcon: true,
        showLabel: true,
        indicatorStyle: {
            backgroundColor: ACTIVE_TAB_COLOR,
            height: 43
        },
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        pressColor: '#E4E4E4',
        style: {
            backgroundColor: 'white',
            height: 43,
            borderTopColor: ACTIVE_TAB_COLOR
        }
    }
});

const authNav = createStackNavigator({
    Login: { screen: Login }
});

const appStackNav = createStackNavigator({
    App : appNav,
    CourseDetail: { screen: CourseDetail },
    FullScreenVideo: { screen: FullScreenVideo },
    StaticScreen: { screen: StaticScreen }
}, {
    mode: 'card',
    navigationOptions: params => ({
        gesturesEnabled: true,
        gesturesDirection: 'inverted',
    }),
    transitionConfig: () => ({
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const {index} = scene;
            const width = layout.initWidth;

            return {
                opacity: position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0, 1, 0],
                }),
                transform: [{
                    translateX: position.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [-width, 0, width],
                    }),
                }]
            };
        },
        headerTitleInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const {index} = scene;

            return {
                opacity: position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0, 1, 0],
                }),
                transform: [{
                    translateX: position.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [-50, 0, 50],
                    }),
                }]
            };
        },
    })
});

const switchNav = createSwitchNavigator({
    AuthLoading: AuthLoading,
    Auth: authNav,
    App: appNav,
    AppStack: appStackNav
},{
    initialRouteName: 'AuthLoading'
});

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps

            const thisSceneIndex = scene.index
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            })

            return { transform: [ { translateX } ] }
        }
    }
};

export default switchNav;
