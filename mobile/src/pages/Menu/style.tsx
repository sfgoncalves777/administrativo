import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    height: '100%',
    backgroundColor: '#0D0D0D',
    justifyContent: 'space-around',  
  },
  title: {
    color: '#F2F2F2',
    marginLeft: 23,
    fontSize: 30,
    fontFamily: 'Roboto_500Medium',
  },
  content_cadastro: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content_foother: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 80
  },
  content_sair: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content_back: {
    width: 150,
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text_back: {
    color: '#F2F2F2',
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
  },
  text: {
    color: '#F2F2F2',
    fontSize: 30,
    fontFamily: 'Roboto_500Medium',
  }
});

export default styles;