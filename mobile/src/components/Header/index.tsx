import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

interface PropHeader {
  menu ?: string
}

const Header: React.FC<PropHeader> = ({ menu }) => {
  const navigation = useNavigation();

  function handleNavigationToMenu() {
    navigation.navigate('Menu');
  }

  return(
    <View style={styles.contentHeader} >
      <Text style={styles.title}>{ menu }</Text>
      <Feather 
        name='menu'
        size={30}
        color='#F2F2F2'
        onPress={ handleNavigationToMenu }
      />
    </View>
  )
}

export default Header;