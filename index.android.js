import { AppRegistry, Text } from 'react-native';

import Main from './src/Main';

Text.defaultProps.style = { fontFamily: 'Ubuntu-Light' };
AppRegistry.registerComponent('NaviBizMobile', () => Main);
