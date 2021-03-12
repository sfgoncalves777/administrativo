import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#EBEBF2',
  },
  content_main: {
    height: '82%',
    paddingHorizontal: 16,    
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',
    color: '#0D0D0D'
  },
  table: {
    height: '95%',
  },
  item_table: {
    width: '100%',
    height: 35,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#0D0D0D',
    borderWidth: 2,
    borderColor: '#0D0D0D',
  },
  item_text: {
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
  }
});

export default styles;