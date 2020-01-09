import React from 'react';
import { Text } from 'react-native';

export default props => <Text {...props} style={[{fontFamily: 'Roboto', color: 'white', fontSize: 20}, props.style]}>{props.children}</Text>
