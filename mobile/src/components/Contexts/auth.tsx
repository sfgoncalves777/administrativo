import React, { createContext, useState, useEffect, useContext } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import api from '../../services/api';

interface User {
  id: string;
  nome: string;
  contato: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  validate: number;
  userAuth: User | null;
  signIn(
    email: string,
    senha: string
  ): Promise<void>;
  newToken(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [userAuth, setUserAuth] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [validate, setValidate] = useState<number>(0);
  new Date();

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
      const storagedValidate = await AsyncStorage.getItem('@RNAuth:validate');

      if(storagedUser && storagedToken && storagedValidate) {
        api.defaults.headers.authorization = `Bearer ${storagedToken}`;
        setUserAuth(JSON.parse(storagedUser));
        setValidate(JSON.parse(storagedValidate));
        setLoading(false);
      }
    }
  }, []);

  async function signIn(email: string, senha: string) {
    const response = await api.post('session', { email, senha });
    
    if(response.data.error) {
      Alert.alert(
        'Ooops',
        response.data.error,
        [{ text: 'Ok' }]
      )
    } else {
      setValidate(Date.now() + 2400000);
      setUserAuth(response.data.user);
      api.defaults.headers.authorization = `Bearer ${response.data.token}`;
      await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.data.user));
      await AsyncStorage.setItem('@RNAuth:tokne', response.data.token);
      await AsyncStorage.setItem('@RNAuth:validate', JSON.stringify(Date.now() + 2400000));
    }
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUserAuth(null);
  }

  async function newToken() {
    const response = await api.put('/session', { header: userAuth?.id });
    setValidate(Date.now() + 2400000);

    api.defaults.headers.authorization = `Bearer ${response.data.token}`;
    await AsyncStorage.setItem('@RNAuth:tokne', response.data.token);
    await AsyncStorage.setItem('@RNAuth:validate', JSON.stringify(Date.now() + 2400000)); 
  }

  return (
    <AuthContext.Provider value={{ signed: !!userAuth, userAuth, validate, loading, signIn, signOut, newToken }} >
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}