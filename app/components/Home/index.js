/*
 *
 * Home
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import TimelineContainer from '../TimelineContainer'

const { View, Text } = ReactNative;

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TimelineContainer />
      </View>
    );
  }
}



export default Home;
