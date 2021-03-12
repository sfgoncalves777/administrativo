import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#0E0E0E',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content_login: {
    height: 300,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    color: '#EBEBF2',
    fontSize: 37,
    fontFamily: 'Roboto_500Medium',
  },
  content_form: {
    paddingHorizontal: 16,
    height: 90,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#EBEBF2',
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
    paddingHorizontal: 10,
    color: '#262626'
  },
  content_foother: {
    height: 80,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  content_info: {
    height: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  link: {
    color: '#EBEBF2',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
  erro: {
    color: '#B20000',
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
  },
  button: {
    width: '100%',
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 5,
  },
  text_button: {
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
    color: '#EBEBF2'
  }

});

export default styles;