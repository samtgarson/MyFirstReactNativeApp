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

const { 
  Animated,
  Dimensions, 
  ListView, 
  ScrollView,
  Text, 
  View,
} = ReactNative;

class Timeline extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scrollOffset: new Animated.Value(0),
      releaseToAdd: false
    }
  }

  componentWillMount () {
    this.state.scrollOffset.addListener(({value}) => {
      this.setState({
        releaseToAdd: value <= -60
      })
    })
  }
  
  header () {
    const text = this.state.releaseToAdd ? 'Release to add!' : 'Pull to add...'
    const height = this.state.scrollOffset.interpolate({
      inputRange: [-1, 1],
      outputRange: [1, -1]
    })
    const opacity = this.state.scrollOffset.interpolate({
      inputRange: [-30, -10],
      outputRange: [1, 0]
    })
    return (
      <Animated.View style={[styles.header, {height: height, opacity: opacity}]}>
        <Text>{text}</Text>
      </Animated.View>
    )
  }
  
  _renderRow (row) {
    return row.newItem ? this.header() : (<TimelineEvent {...row} />)
  }

  handleRelease (event, action) {
    if (this.state.releaseToAdd) {
      action()
    }
  }

  generateData() {
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    var events = this.props.events.toJS()
    return dataSource.cloneWithRows(events)
  }

  render () {
    const listProps = {
      showsHorizontalScrollIndicator: false,
      showsVerticalScrollIndicator: false,
      onScroll: Animated.event(
        [{nativeEvent: {contentOffset: {y: this.state.scrollOffset}}}]
      ),
      scrollEventThrottle: 12,
      onTouchEnd: (e) => { this.handleRelease(e, this.props.addTimelineEvent) },
      horizontal: false,
      dataSource: this.generateData(),
      renderRow: this._renderRow.bind(this),
      styles: styles.timeline,
      contentContainerStyles: styles.container
    }
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        {this.header()}
        <ListView {...listProps} />
      </View>
    )
  }
}

export default Timeline;
