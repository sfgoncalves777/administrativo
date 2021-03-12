import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contentFoother: {
    height: 50,
    paddingHorizontal: 60,
    backgroundColor: '#262626',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  functions: {
    fontSize: 20,
    fontFamily: 'Roboto_500Medium',
    color: '#F2F2F2',
    opacity: 0.5,
    paddingBottom: 5
  },
  functionSelected: {
    fontSize: 20,
    fontFamily: 'Roboto_500Medium',
    color: '#F2F2F2',
    paddingBottom: 5
  }
});

export default styles;