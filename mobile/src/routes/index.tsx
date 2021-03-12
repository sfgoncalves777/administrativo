import React from 'react';
import { AppLoading } from 'expo';
import { useAuth } from '../components/Contexts/auth';

import TagSistemas_New from '../pages/TagSistemas/New';
const AppStack = createStackNavigator();


import AppRoutes from './app';
import AuthRoutes from './auth';
import { createStackNavigator } from '@react-navigation/stack';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  /*

  if(loading) {
    <AppLoading />
  }

  return signed ? <AppRoutes/> : <AuthRoutes/>

  */

  return (
    <AppStack.Navigator
    headerMode='none'
  >
    <AppStack.Screen name='TagSistemas_New' component={TagSistemas_New} options={{ animationEnabled: false }} />

  </AppStack.Navigator>    
  )
}

export default Routes;