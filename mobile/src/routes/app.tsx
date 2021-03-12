import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationState } from '@react-navigation/native';

import HomePage from '../pages/HomePage';
import Menu from '../pages/Menu'; 
import HomeCadastro from '../pages/HomeCadastro';
import Projects from '../pages/Projects';

import TagSistemas_Index from '../pages/TagSistemas/Index';
import TagSistemas_New from '../pages/TagSistemas/New';
import TagSistemas_Edit from '../pages/TagSistemas/Edit';

import ProjectOne_Index from '../pages/ProjectOne/Index';
import ProjectOne_New from '../pages/ProjectOne/New';
import ProjectOne_Edit from '../pages/ProjectOne/Edit';

const AppStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AppStack.Navigator
      headerMode='none'
    >
      <AppStack.Screen name='Home' component={HomePage} options={{ animationEnabled: false }} />
      <AppStack.Screen name='Menu' component={Menu} options={{ animationEnabled: false }} />
      <AppStack.Screen name='HomeCadastro' component={HomeCadastro} options={{ animationEnabled: false }} />
      <AppStack.Screen name='Usuário' component={Projects} options={{ animationEnabled: false }} />
      
      <AppStack.Screen name='TagSistemas_Index' component={TagSistemas_Index} options={{ animationEnabled: false }} />
      <AppStack.Screen name='TagSistemas_New' component={TagSistemas_New} options={{ animationEnabled: false }} />
      <AppStack.Screen name='TagSistemas_Edit' component={TagSistemas_Edit} options={{ animationEnabled: false }} />
      
      <AppStack.Screen name='ProjectOne_Index' component={ProjectOne_Index} options={{ animationEnabled: false }} />
      <AppStack.Screen name='ProjectOne_New' component={ProjectOne_New} options={{ animationEnabled: false }} />
      <AppStack.Screen name='ProjectOne_Edit' component={ProjectOne_Edit} options={{ animationEnabled: false }} />
    </AppStack.Navigator>    
  )
}

export default AuthRoutes;