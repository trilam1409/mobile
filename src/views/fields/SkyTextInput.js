import React from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from '../../styles/SkyTextInput.styles';
import PropTypes from 'prop-types';

/**
 * to be wrapped with redux-form Field component
 */
export default function SkyTextInput(props) {
  const { input, meta, meta: { touched, error }, errorStyle, ...inputProps } = props;

  // do not display warning if the field has not been touched or if it's currently being edited
  const validationStyles = touched && !meta.active
    ? meta.valid ? styles.valid : styles.invalid
    : null;

  return (
      <View style={[styles.inputContainer, validationStyles]}>
        <TextInput
          {...inputProps}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
          style={styles.input}
        />
      </View>
);
}

SkyTextInput.propTypes = {
  input: PropTypes.shape({
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    error: PropTypes.string,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    visited: PropTypes.bool.isRequired
  }).isRequired
};
