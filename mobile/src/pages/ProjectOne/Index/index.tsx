import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useAuth } from '../../../components/Contexts/auth';
import Header from '../../../components/Header';
import Foother from '../../../components/Foother';
import api from '../../../services/api';
import styles from './style';

interface Company {
  id: number,
  nome: string,
}

const ProjectOne_Index = () => {
  const [ company, setCompany ] = useState<Company[]>([]);
  const { validate, newToken } = useAuth();
  const navigation = useNavigation();
  new Date();

  useFocusEffect(
    useCallback(() => {

      if(Date.now() > validate) {
        newToken();
      }

      api
        .get('/projectone/companies')
        .then(response => setCompany(response.data));
      return;
    }, [])
  )

  function handleNaviteToNew() {
    navigation.navigate('ProjectOne_New');
  }

  function handleNavigateToCompany( id: number ) {
    navigation.navigate('ProjectOne_Edit', { company_id: id })
  }

  return (
    <View style={styles.content} >
      <Header menu='Cadastro' />

      <View style={styles.content_main} >
        <View style={styles.header} >
          <Text style={styles.title} >Project One</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={ handleNaviteToNew }
          >
            <Text style={styles.text_button} >Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={company}
          style={styles.table}
          keyExtractor={ company => String(company.id) }
          showsVerticalScrollIndicator={ false }
          renderItem={ (company) => (
            <TouchableOpacity
              style={styles.item_table} 
              key={String(company.item.id)}
              onPress={ () => handleNavigateToCompany(company.item.id) }
            >
              <Text style={styles.item_text} > {company.item.nome} </Text>
            </TouchableOpacity>
          ) }
        />
      </View>

      <Foother funcionalidades={['Usuário']} selected='Usuário' />
    </View>
  )
}

export default ProjectOne_Index;