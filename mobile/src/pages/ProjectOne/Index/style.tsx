import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    height: '100%',
    backgroundColor: '#EBEBF2',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content_main: {
    height: '82%',
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#0D0D0D',
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',
  },
  button: {
    width: 70,
    height: 35,
    borderRadius: 5,
    backgroundColor: '#0D0D0D',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_button: {
    color: '#F2F2F2',
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
  },
  table: {
    height: '95%',
    marginTop: 5,
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
    borderColor: '#0D0D0D'
  },
  item_text: {
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
  }
});

export default styles;