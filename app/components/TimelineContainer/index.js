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
import { addTimelineEvent } from './actions'
import Timeline from '../Timeline'
const { View, Text } = ReactNative;

class TimelineContainer extends Component {
  render() {
    return (
      <Timeline addTimelineEvent={this.props.addTimelineEvent} events={this.props.events} />
    );
  }
}

TimelineContainer.propTypes = {
  events: React.PropTypes.object.isRequired,
  addTimelineEvent: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    addTimelineEvent: () => {
      dispatch(addTimelineEvent())
    },
  };
}

export default connect(
  createSelector(selectTimelineContainer, (timelineContainer) => ({ events: timelineContainer })),
  mapDispatchToProps
)(TimelineContainer);
