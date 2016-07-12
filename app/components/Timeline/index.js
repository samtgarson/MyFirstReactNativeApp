/*
 *
 * Timeline
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import InvertibleScrollView from 'react-native-invertible-scroll-view';
import TimelineEvent from '../TimelineEvent'
import styles from './styles';

const { View, ListView, Text } = ReactNative;

const _renderRow = (row) => (
  <TimelineEvent {...row} />
)

const Timeline = ({events}) => {
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
  return (
    <ListView
      horizontal={true}
      renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
      dataSource={ds.cloneWithRows(events.toJS())}
      renderRow={_renderRow}
      styles={styles.timeline}
    />
  )
}

export default Timeline;
