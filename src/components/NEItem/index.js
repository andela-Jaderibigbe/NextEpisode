import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection, Button } from '../common';

import { NEItemStyles } from '../../styles';

class NEItem extends Component {

  handleOnPress(id) {
    this.props.onReadMore(id);
  }

  render() {
    const { movie: { id, name, overview, imageUrl } } = this.props;
    const { imageContainer, headerTitle, headerTitleContainer } = NEItemStyles;
    return (
      <Card>
        <CardSection>
          <View style={headerTitleContainer}>
            <Text style={headerTitle}>{name}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style={imageContainer}
            source={{uri: imageUrl}}
          />
        </CardSection>
        <CardSection>
          <Text numberOfLines={3}>{overview}</Text>
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

export default NEItem;
