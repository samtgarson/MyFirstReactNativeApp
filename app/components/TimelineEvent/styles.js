import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window')

export default StyleSheet.create({
  event: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: Math.min(height, width),
    alignItems: 'center'
  }
});
