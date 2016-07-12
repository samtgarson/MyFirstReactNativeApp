/*
 *
 * TimelineContainer
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectTimelineContainer } from './reducer';
import Timeline from '../Timeline'
const { View, Text } = ReactNative;

class TimelineContainer extends Component {
  render() {
    return (
      <Timeline events={this.props.events} />
    );
  }
}

TimelineContainer.propTypes = {
  events: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  createSelector(selectTimelineContainer, (timelineContainer) => ({ events: timelineContainer })),
  mapDispatchToProps
)(TimelineContainer);
