import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import Foother from '../../components/Foother';
import styles from './style';

const HomeCadastro = () => {
  return (
    <View style={styles.content}>
      <Header menu='Cadastro' />
      <Foother funcionalidades={['Usuário']} />
    </View>
  )
}

export default HomeCadastro;