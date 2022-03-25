import { StyleSheet } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 20,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    checkIcon: {
      fontSize: 30,
      color: "#1FD537"
    },
    noIcon: {
      fontSize: 26,
      color: "#E40010",
    },
  });