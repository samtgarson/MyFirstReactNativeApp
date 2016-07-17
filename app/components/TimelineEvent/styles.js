import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'rgb(207,216,220)'
  },
  scroll: {
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  event: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
