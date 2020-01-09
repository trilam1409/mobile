import { StyleSheet, Dimensions } from 'react-native';
import { SCREEN_WIDTH } from "./Master.styles";

export default StyleSheet.create({
  input: {
    color: 'black',
    backgroundColor: 'transparent',
    fontSize: 15,
    marginLeft: 5,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: '#bca8af',
    marginTop: 10,
    marginBottom: 10
  },
  valid: {
    borderColor: '#53E69D'
  },
  invalid: {
    borderColor: '#F55E64'
  }
});
