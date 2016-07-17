/*
 *
 * Home
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';
import Events from '../Events'

const { View, Text } = ReactNative;

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Events />
      </View>
    );
  }
}



export default Home;
