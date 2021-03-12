import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useAuth } from '../../components/Contexts/auth';
import styles from './style'

const Login = () => {
  const { signIn } = useAuth();
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');

  function handleLogin() {
    signIn(email, senha);
  }

  return (
    <View style={styles.content} >
      <View style={styles.content_login} >

        <Text style={styles.logo} >Tag Sistemas</Text>

        <View style={styles.content_form} >
          <TextInput
            placeholder='E-mail'
            style={styles.input}
            onChangeText={ setEmail }
          />

          <TextInput
            placeholder='Senha'
            style={styles.input}
            onChangeText={ setSenha }
          />
        </View>

        <View style={styles.content_foother} >
          <View style={styles.content_info} >
            <TouchableOpacity>
              <Text style={styles.link} >Relembrar senha</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={ handleLogin }
          >
            <Text style={styles.text_button} >Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login;