import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useAuth } from '../../../components/Contexts/auth';
import Header from '../../../components/Header';
import Foother from '../../../components/Foother';
import api from '../../../services/api';
import styles from './style';

interface Users {
  id: number,
  nome: string,
}

const TagSistemas_Index = () => {
  const [ users, setUsers ] = useState<Users[]>([]);
  const navigation = useNavigation();
  const { validate, newToken } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if(Date.now() > validate) {
        newToken();
      }

      api
        .get('/tagsistemas/users')
        .then(response => setUsers(response.data));
      console.log('teste');
      return;
    }, [])
  )

  function handleNavigateToNew() {
    navigation.navigate('TagSistemas_New');
  }

  function handleNavigateToUser(id: number) {
    navigation.navigate('TagSistemas_Edit', { user_id: id })
  }

  return(
    <View style={styles.content}>
      <Header menu='Cadastro'/>
      
      <View style={styles.content_main} >
        <View style={styles.header} >
          <Text style={styles.title} >Tag Sistemas</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={ handleNavigateToNew }
          >
            <Text style={styles.text_button} >Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList 
          data={users}
          style={styles.table}
          keyExtractor={ user => String(user.id) }
          showsVerticalScrollIndicator={false}
          renderItem={( user )  => (
            <TouchableOpacity
              style={styles.item_table}
              key={String(user.item.id)}
              onPress={() => handleNavigateToUser(user.item.id)}
            >
              <Text style={styles.item_text} >{ user.item.nome }</Text>
            </TouchableOpacity>
          )}
        />

      </View>
      <Foother funcionalidades={['Usuário']} selected='Usuário' />
    </View>
  )
}

export default TagSistemas_Index;