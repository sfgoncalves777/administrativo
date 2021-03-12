import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import Foother from '../../components/Foother';
import styles from './style';

const Projects = () => {
  const navigation = useNavigation();

  function handleNavigateToTagSistemas () {
    navigation.navigate('TagSistemas_Index');
  }

  function handleNavigateToProjectOne () {
    navigation.navigate('ProjectOne_Index');
  }

  return (
    <View style={styles.content}>
      <Header menu='Cadastro' />
      <View style={styles.content_main}>
        <Text style={styles.title}>Projects</Text>
        <View style={styles.table}>

          <TouchableOpacity 
            style={styles.item_table}
            onPress={ handleNavigateToTagSistemas }
          >
            <Text style={styles.item_text}>Tag Sistemas</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.item_table}
            onPress={ handleNavigateToProjectOne }
          >
            <Text style={styles.item_text}>Project One</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Foother funcionalidades={['Usuário']} selected='Usuário' />
    </View>
  )
}

export default Projects;