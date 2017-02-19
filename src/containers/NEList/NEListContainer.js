import React, { PropTypes, Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import NEItem from '../../components/NEItem';
import { loadResource } from '../../actions';
import { FETCH_TOP_RATED_SERIES } from '../../constants';

class NEListContainer extends Component {
  // Will need to move this to the header to dispactch the loadResource on change of the header
  componentWillMount() {
    this.props.loadResource(FETCH_TOP_RATED_SERIES);
  }

  handleReadMore = (id) => {
    console.log('read more for movie id:', id);
    return;
  }

  renderList() {
    const { results = [] } = this.props;
    return results.map(
      movie => <NEItem key={movie.id} movie={movie} onReadMore={this.handleReadMore}/>
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderList()}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return { ...movies };
};

const mapDispatchToProps = dispatch => {
  return {
    loadResource: (type) => dispatch(loadResource(type))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NEListContainer);
