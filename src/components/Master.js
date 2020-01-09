import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MasterScreen from '../views/Master';
import { createStackNavigator } from 'react-navigation';

class Master extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    render() {
        return <MasterScreen navigate={this.props.navigation.navigate} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(Master);
