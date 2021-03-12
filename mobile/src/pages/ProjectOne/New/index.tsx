import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import contactMask from '../../../utils/contactMask';
import { useAuth } from '../../../components/Contexts/auth';
import Header from '../../../components/Header';
import api from '../../../services/api';
import styles from './style';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const ProjectOne_New = () => {
  const [ nome, setNome ] = useState('');
  const [ contato, setContato ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const { validate, newToken } = useAuth();

  const [ errors, setErrors ] = useState({
    nome: '',
    contato: '',
    email: '',
    senha: '',
  })

  const navigation = useNavigation();

  useEffect(() => {
    if(Date.now() > validate) {
      newToken();
    }
  }, [])

  function handleBack () {
    navigation.navigate('ProjectOne_Index');
  }

  async function handleSubmit() {
    const formData = {
      nome: nome,
      contato: contato,
      email: email,
      senha: senha
    }

    await api
      .post('/projectone/companies/new', formData)
      .then(response => {
        if(response.data.error) {
          setErrors(response.data.error)
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
          <Text style={styles.title} >Cadastrar novo usuário</Text>
          
          <View style={styles.content_info} >
            <Text style={styles.label} >Nome</Text>
            <Text style={styles.error} >{errors.nome}</Text>
          </View>        
          <TextInput
            style={styles.input}
            value={ nome }
            onChangeText={ setNome }
            placeholder='Ex: João da Silva'
          />

          <View style={styles.content_info} >
            <Text style={styles.label} >Contato</Text>
            <Text style={styles.error} >{errors.contato}</Text>
          </View>
          <TextInput
            style={styles.input}
            value={ contato }
            onChangeText={ text => setContato(contactMask(text)) }
            maxLength={15}              
            placeholder='Ex: (00) 0000 0000'
          />

          <View style={styles.content_info} >
            <Text style={styles.label} >E-mail</Text>
            <Text style={styles.error} >{errors.email}</Text>
          </View>
          <TextInput
            style={styles.input}
            value={ email }
            onChangeText={ setEmail }
            placeholder='Ex: contato@joao.com'
          />

          <View style={styles.content_info} >
            <Text style={styles.label} >Senha</Text>
            <Text style={styles.error} >{errors.senha}</Text>
          </View>
          <TextInput
            style={styles.input}
            value={ senha }
            onChangeText={ setSenha }
          />
        </View>

        <View style={styles.foother} >
          <TouchableOpacity
            style={styles.content_back}
            onPress={handleBack} 
          >
            <Feather name='arrow-left' size={20} color='#0D0D0D' />
            <Text style={styles.text_back} >Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_save}
            onPress={ handleSubmit }
          >
            <Feather name='save' size={22} color ='#f2f2f2' />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default ProjectOne_New;