import ReactNative from 'react-native';
import React, { Component, PropTypes } from 'react';
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
    console.log(props)
    this.state = {
      scrollOffset: new Animated.Value(0),
      releaseToAdd: false
    }

    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
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
    return (<TimelineEvent hideEvent={() => {this.props.hideTimelineEvent(row.id)}} {...row} />)
  }

  handleRelease (event) {
    if (this.state.releaseToAdd) {
      this.props.addTimelineEvent()
    }
  }

  render () {
    const {events} = this.props

    const listProps = {
      showsVerticalScrollIndicator: false,
      onScroll: Animated.event(
        [{nativeEvent: {contentOffset: {y: this.state.scrollOffset}}}]
      ),
      scrollEventThrottle: 16,
      onTouchEnd: this.handleRelease.bind(this),
      dataSource: this.dataSource.cloneWithRows(events),
      renderRow: this._renderRow.bind(this),
      enableEmptySections: true,
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

Timeline.propTypes = {
  events: PropTypes.array.isRequired,
  addTimelineEvent: PropTypes.func.isRequired,
  hideTimelineEvent: PropTypes.func.isRequired
};

export default Timeline
