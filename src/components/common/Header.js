import React from 'react';
import { Text, View } from 'react-native';
import { headerStyles } from '../../styles';

const Header = (props) => {
  const { textStyle, viewStyle } = headerStyles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

export { Header };
