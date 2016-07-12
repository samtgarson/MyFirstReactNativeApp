/*
 *
 * TimelineEvent
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

const { View, Text } = ReactNative;

const TimelineEvent = ({text}) => (
  <View style={styles.event}>
    <Text>{text}</Text>
  </View>
)



export default TimelineEvent;
