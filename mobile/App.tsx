import React from 'react';
import { StatusBar, SafeAreaView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { AuthProvider, useAuth } from './src/components/Contexts/auth';
import Routes from './src/routes';

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  const { validate, newToken } = useAuth();  
  new Date();

  /*if(Date.now() > validate) {
    Alert.alert(
      'Ooops',
      'venceu',
      [{ text: 'Ok' }]
    )
    newToken();
  }*/

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor:'#0D0D0D' }} />
      <SafeAreaView style={{ flex: 1 }} >        
        <StatusBar barStyle='light-content' backgroundColor='#0D0D0D' />
        <NavigationContainer>
          <AuthProvider>
            <Routes/>
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaView>
      
    </>
  )
}
