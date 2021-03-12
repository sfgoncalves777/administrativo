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
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

interface Params {
  user_id: number
}

const TagSistestemas_Edit = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routeParam = route.params as Params;
  const { validate, newToken } = useAuth();

    const [ user, setUser ] = useState({
      nome: '',
      contato: '',
      email: '',
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
      .get(`/tagsistemas/users/show/${routeParam.user_id}`)
      .then(response => setUser(response.data));
  }, []);

  function handleBack () {
    navigation.navigate('TagSistemas_Index');
  }

  async function handleDeleteUser() {
    await api.delete(`/tagsistemas/users/delete/${routeParam.user_id}`);
    navigation.navigate('TagSistemas_Index');
  }

  async function handleUpdateUser () {
    await api
      .put(`/tagsistemas/users/edit/${routeParam.user_id}`, user)
      .then(response => {
        if(response.data.error) {
          setErros(response.data.error)
        } else {
          navigation.navigate('TagSistemas_Index');
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
            value={user.nome}
            onChangeText={ text => {
              const nome = text
              setUser({...user, nome})
            }}
            placeholder='Ex: João da Silva'
          />

          <View style={styles.content_info} >
            <Text style={styles.label} >Contato</Text>
            <Text style={styles.error} >{ errors.contato }</Text>
          </View>
          <TextInput
            style={styles.input}
            value={user.contato}
            onChangeText={ text => {
              const contato = contactMask(text);
              setUser({...user, contato});
            }}
            placeholder='Ex: (00) 0000 0000'
          />

          <View style={styles.content_info}>
            <Text style={styles.label} >E-mail</Text>
            <Text style={styles.error} >{ errors.email }</Text>
          </View>
          <TextInput
            style={styles.input}
            value={user.email}
            onChangeText={ text => {
              const email = text;
              setUser({...user, email});
            } }
            placeholder='Ex: contato@joao.com'
          />
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
              onPress={ handleDeleteUser }
            >
              <Feather name='trash-2' size={22} color ='#f2f2f2' />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button_save}
              onPress={handleUpdateUser }
            >
              <Feather name='save' size={22} color ='#f2f2f2' />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default TagSistestemas_Edit;