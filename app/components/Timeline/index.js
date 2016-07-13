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

const { View, ListView, Text, Dimensions, RefreshControl } = ReactNative;

const _renderRow = (row) => (
  <TimelineEvent {...row} />
)

const _renderHeader = () => (
  <Text>Hidden!</Text>
)

const Timeline = ({events, addTimelineEvent}) => {
  const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
  const scrollProps = {
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false
  }
  return (
    <ListView
      horizontal={false}
      // renderScrollComponent={scrollProps}
      dataSource={dataSource.cloneWithRows(events.toJS())}
      renderRow={_renderRow}
      renderHeader={_renderHeader}
      styles={styles.timeline}
      contentOffset={{x: 0, y: 20}}
    />
  )
}

export default Timeline;
