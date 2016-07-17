/*
 *
 * TimelineEvent
 *
 */

import ReactNative from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

const { Animated, View, Text, ScrollView } = ReactNative;
const FINAL_HEIGHT = 120
const RELEASE_OFFSET = 80

class TimelineEvent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rowHeight: new Animated.Value(0),
      scrollOffset: new Animated.Value(0),
      releaseToHide: false
    }
  }
  componentDidMount () {
    Animated.timing(
      this.state.rowHeight,
      {toValue: FINAL_HEIGHT}
    ).start(); 

    this.state.scrollOffset.addListener(({value}) => {
      this.setState({
        releaseToHide: value >= RELEASE_OFFSET
      })
    })
  }

  onRelease () {
    if (this.state.releaseToHide) this.props.hideEvent()
  }
  render () {
    const rowOpacity = this.state.rowHeight.interpolate({
      inputRange: [0, FINAL_HEIGHT],
      outputRange: [0, 1]
    })
    const onScroll = Animated.event(
      [{nativeEvent: {contentOffset: {x: this.state.scrollOffset}}}]
    )
    const bgColor = this.state.scrollOffset.interpolate({
      inputRange: [1, 2, RELEASE_OFFSET - 10, RELEASE_OFFSET],
      outputRange: ['white', 'rgb(207,216,220)', 'rgb(207,216,220)', 'rgb(211,47,47)'],
      extrapolate: 'clamp'
    })
    return (
      <Animated.View style={[styles.container, {opacity: rowOpacity, backgroundColor: bgColor}]}>
        <ScrollView 
          scrollEventThrottle={16} 
          horizontal={true} 
          contentContainerStyle={styles.scroll} 
          onScroll={onScroll}
          onTouchEnd={this.onRelease.bind(this)}
        >
          <Animated.View style={[styles.event, {height: this.state.rowHeight}]}>
            <Text>{this.props.text}</Text>
            <Text>{this.props.createdAt.getSeconds()}</Text>
          </Animated.View>
        </ScrollView>
      </Animated.View>
    )
  }
}



export default TimelineEvent;
