import React from 'react';
import { View } from 'react-native';

import { cardStyles } from '../../styles';

const Card = (props) => {
  const { container } = cardStyles;
  const { children } = props;
  return <View style={container}>{children}</View>;
};

export { Card };
