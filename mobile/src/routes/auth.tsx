import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return(
    <AppStack.Navigator
      headerMode='none'
    >
      <AppStack.Screen name='Login' component={Login} options={{  animationEnabled: false }} />
    </AppStack.Navigator>
  )
}

export default AppRoutes;