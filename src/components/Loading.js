import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import IndicatorStyles from '../styles/Indicator.styles';

export default class Loading extends Component {
  render() {
      return <View style={IndicatorStyles.activityIndicatorContainer}>
        <ActivityIndicator
          animating={true}
          style={[{ height: 80 }]}
          size="small"
        />
      </View>;
  }
}
