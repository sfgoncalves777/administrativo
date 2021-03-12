import React, { createContext, useState, useEffect, useContext } from 'react';
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
  ): Promise<string>;
  newToken(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [userAuth, setUserAuth] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  var [validate, setValidate] = useState(0);
  new Date();

  useEffect(() => {
    const storagedUser = localStorage.getItem('user');
    const storageToken = localStorage.getItem('token');
    const storageValidate = localStorage.getItem('validate');

    if(storagedUser && storageToken && storageValidate) {
      setUserAuth(JSON.parse(storagedUser));
      setValidate(JSON.parse(storageValidate));
      api.defaults.headers.authorization = `Bearer ${JSON.parse(storageToken)}`
    }

    setLoading(false);

  }, [])

  async function newToken() {
    const response = await api.put('/session', { headers: userAuth?.id });
    setValidate(Date.now() + 3000000);

    api.defaults.headers.authorization = `Bearer ${response.data.token}`;
    localStorage.setItem('token', JSON.stringify(response.data.token));
    localStorage.setItem('validate', JSON.stringify(Date.now() + 3000000));
  }

  async function signIn(email: string, senha: string) {
    const response = await api.post('session', {email, senha});

    if(response.data.error){
      return response.data.error;
    }

    setValidate(Date.now() + 3000000);
    setUserAuth(response.data.user);
    api.defaults.headers.authorization = `Bearer ${response.data.token}`
    localStorage.setItem('token', JSON.stringify(response.data.token));
    localStorage.setItem('user', JSON.stringify(response.data.user));
    localStorage.setItem('validate', JSON.stringify(Date.now() + 3000000));

  }

  function signOut() {
    localStorage.clear();
    setUserAuth(null);
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