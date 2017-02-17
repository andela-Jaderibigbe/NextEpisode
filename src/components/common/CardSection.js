import React from 'react';
import { View } from 'react-native';

import { cardSectionStyles } from '../../styles';

const CardSection = (props) => {
  const { container } = cardSectionStyles;
  return (
    <View style={container}>
      {props.children}
    </View>
  );
};

export { CardSection };
