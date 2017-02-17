import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection, Button } from '../common';

import { NEDetailStyles } from '../../styles';

class NEDetail extends Component {

  handleOnPress(id) {
    this.props.onReadMore(id)
  }

  render() {
    const { movie } = this.props;
    const { id, name, overview, imageUrl } = movie;
    const { imageContainer } = NEDetailStyles;
    return (
      <Card>
        <CardSection>
          <View>
            <Text>{name}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style={imageContainer}
            source={{uri: imageUrl}}
          />
        </CardSection>
        <CardSection>
          <Button
            labelText='Read More'
            onPress={this.handleOnPress.bind(this, id)} />
        </CardSection>
      </Card>
    );
  }
}

export default NEDetail;
