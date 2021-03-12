import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#EBEBF2',
    flex: 1,
    paddingBottom: 5,
  },
  content_main: {
    height: '95%',
    minHeight: 520,
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',
    color: '#0D0D0D',
    marginTop: 15,
  },
  content_info: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
    color: '#262626',
  },
  error: {
    fontSize: 14,
    fontFamily: 'Roboto_500Medium',
    color: '#660000'
  },
  input: {
    height: 35,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#0D0D0D',
    backgroundColor: '#EBEBF2',
    marginTop: 5,
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
    paddingHorizontal: 10,
  },
  select: {
    height: 35,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#0D0D0D',
    backgroundColor: '#EBEBF2',
    marginTop: 5,
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
    justifyContent: 'center',
  },
  foother: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  content_back: {
    width: 60,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text_back: {
    fontSize: 14,
    fontFamily: 'Roboto_500Medium',
    color: '#0D0D0D',
  },
  content_buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '42%',
  },
  button_save: {
    width: 70,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    borderRadius: 5,
  },
  button_delete: {
    width: 70,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#660000',
    borderRadius: 5, 
  }
});

export default styles;