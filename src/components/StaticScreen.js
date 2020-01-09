import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MasterView from '../views/Master';
import {Alert} from "react-native";
import StaticScreenView from "../views/StaticScreen";
import {HEADER_COLOR} from "../config/colors";

class StaticScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        'title': navigation.state.params.title,
        headerTitleStyle: {
            color: 'white'
        },
        headerStyle:{
            backgroundColor:HEADER_COLOR,
        },
        headerTintColor: 'white'
    });

    constructor(props) {
        super(props);
    }

    _getStaticContent() {
       return this.props.navigation.getParam('content');
    }

    render() {
        return <MasterView navigate={this.props.navigation.navigate}
                           content={<StaticScreenView staticContent={this._getStaticContent()}/>} />;
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
    return bindActionCreators(Object.assign({}), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StaticScreen);
