import React, { PropTypes } from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import { buttonStyles, colors } from '../../styles';

const Button = ({ onPress, labelText }) => {
  const { buttonContainer, buttonText } = buttonStyles;
  return (
    <TouchableHighlight
      style={buttonContainer}
      onPress={onPress}
      underlayColor={colors.hotPink}>
      <Text style={buttonText}>
        {labelText}
      </Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  labelText: PropTypes.string,
  loading: PropTypes.bool
};

export { Button };
