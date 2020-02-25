import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MasterView from '../views/Master';
import StaticScreenView from "../views/StaticScreen";

class StaticScreen extends Component {

    constructor(props) {
        super(props);
    }

    _getStaticContent() {
       return this.props.navigation.getParam('content');
    }

    render() {
        return <MasterView navigation={this.props.navigation}
                           haveHeader={"ĐIỀU KHOẢN"}
                           haveBackButton={true}
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
