/*
 *
 * HomeContainer
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectHomeContainer } from './reducer';
const { View, Text } = ReactNative;

class HomeContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeContainer</Text>
      </View>
    );
  }
}

HomeContainer.propTypes = {
  homeContainer: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  createSelector(selectHomeContainer, (homeContainer) => ({ homeContainer })),
  mapDispatchToProps
)(HomeContainer);
