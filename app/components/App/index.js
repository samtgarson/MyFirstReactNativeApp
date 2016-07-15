import ReactNative from 'react-native';
import React, { Component } from 'react';
import Home from '../Home'
import styles from './styles'
const { StatusBar, View } = ReactNative


class App extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar hidden={true} />
        <Home style={styles.scene} />
      </View>
    );
  }
}



export default App;
