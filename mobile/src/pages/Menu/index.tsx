import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../components/Contexts/auth';
import styles from './style';

const Menu = () => {
  const { signOut, validate } = useAuth();
  const navigation = useNavigation();

  function handleNavigateToCadastro() {
    navigation.navigate('HomeCadastro');
  }

  function handleNavigateToBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Menu</Text>
      
      <TouchableOpacity
        style={styles.content_cadastro}
        onPress={ handleNavigateToCadastro }
      >
        <Text style={styles.text}>Cadastro</Text>
        <Feather name='save' size={45} color='#F2F2F2' />
      </TouchableOpacity>

      <View style={styles.content_foother} >
        <TouchableOpacity 
        style={styles.content_sair}
        onPress={ signOut }
      >
          <Text style={styles.text}>Sair</Text>
          <Feather name='power' size={40} color='#F2F2F2' />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.content_back}
          onPress={ handleNavigateToBack }
        >
          <Feather name='arrow-left' size={20} color='#F2F2F2' />
          <Text style={styles.text_back}>Voltar para home</Text>
        </TouchableOpacity> 
      </View>    
    </View>
  )
}

export default Menu;