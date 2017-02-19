import React, { PropTypes, Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import NEListContainer from '../NEList/NEListContainer';
import { Header } from '../../components';

import { FETCH_TOP_RATED_SERIES } from '../../constants';
import { loadResource } from '../../actions';

console.disableYellowBox = true;

class AppContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='Next Episode' />
        <NEListContainer />
      </View>
    );
  }
}

export default AppContainer;
