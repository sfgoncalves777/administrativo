import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import contactMask from '../../../utils/contactMask';
import { useAuth } from '../../../components/Contexts/auth';
import Header from '../../../components/Header';
import api from '../../../services/api';
import styles from './style';
import {
  View,
  Text,
  Picker,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

interface Params {
  company_id: number
}

const ProjectOne_Edit = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routeParam = route.params as Params;
  const { validate, newToken } = useAuth();

    const [ company, setCompany ] = useState({
      nome: '',
      contato: '',
      email: '',
      status: '',
    });

  const [ errors, setErros ] = useState({
    nome: '',
    contato: '',
    email: '',
  });

  useEffect(() => {
    if(Date.now() > validate) {
      newToken();
    }

    api
      .get(`/projectone/companies/show/${routeParam.company_id}`)
      .then(response => setCompany(response.data));
  }, []);

  function handleBack () {
    navigation.navigate('ProjectOne_Index');
  }

  async function handleDeleteCompany() {
    await api.delete(`/projectone/companies/delete/${routeParam.company_id}`);
    navigation.navigate('ProjectOne_Index');
  }

  async function handleUpdateCompany () {
    await api
      .put(`/projectone/companies/edit/${routeParam.company_id}`, company)
      .then(response => {
        if(response.data.error) {
          setErros(response.data.error)
        } else {
          navigation.navigate('ProjectOne_Index');
        }
      })
  }

  return (
    <View style={styles.content} >
      <Header menu='Cadastro' />

      <ScrollView contentContainerStyle={styles.content_main} >
        <View>
          <Text style={styles.title} >Atualizar dados</Text>

          <View style={styles.content_info}>
            <Text style={styles.label} >Nome</Text>
            <Text style={styles.error} >{ errors.nome }</Text>
          </View>
          <TextInput
            style={styles.input}
            value={company.nome}
            onChangeText={ text => {
              const nome = text
              setCompany({...company, nome})
            }}
            placeholder='Ex: João da Silva'
          />

          <View style={styles.content_info} >
            <Text style={styles.label} >Contato</Text>
            <Text style={styles.error} >{ errors.contato }</Text>
          </View>
          <TextInput
            style={styles.input}
            value={company.contato}
            onChangeText={ text => {
              const contato = contactMask(text);
              setCompany({...company, contato});
            }}
            placeholder='Ex: (00) 0000 0000'
          />

          <View style={styles.content_info}>
            <Text style={styles.label} >E-mail</Text>
            <Text style={styles.error} >{ errors.email }</Text>
          </View>
          <TextInput
            style={styles.input}
            value={company.email}
            onChangeText={ text => {
              const email = text;
              setCompany({...company, email});
            } }
            placeholder='Ex: contato@joao.com'
          />

          <View style={styles.content_info}>
            <Text style={styles.label} >Status</Text>
          </View>
          <View style={styles.select} >
            <Picker
              selectedValue={ company.status }
              onValueChange={ ( status: string ) => setCompany({...company, status}) }
            >
              <Picker.Item label='Ativo' value='ativo' />
              <Picker.Item label='Bloqueado' value='bloqueado' />
            </Picker>
          </View>
        </View>

        <View style={styles.foother} >
          <TouchableOpacity
            style={styles.content_back}
            onPress={ handleBack }
          >
            <Feather name='arrow-left' size={20} color='#0D0D0D' />
            <Text style={styles.text_back} >Voltar</Text>
          </TouchableOpacity>

          <View style={styles.content_buttons}>
            <TouchableOpacity
              style={styles.button_delete}
              onPress={ handleDeleteCompany }
            >
              <Feather name='trash-2' size={22} color ='#f2f2f2' />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button_save}
              onPress={ handleUpdateCompany }
            >
              <Feather name='save' size={22} color ='#f2f2f2' />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ProjectOne_Edit;