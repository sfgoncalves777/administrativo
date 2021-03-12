import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

interface PropsFoother {
  funcionalidades ?: string[],
  selected ?: string
}

const Foother: React.FC<PropsFoother> = ({ funcionalidades, selected }) => {
  const navigation = useNavigation();

  function handleToFunction ( functionalidade: string ) {
    navigation.navigate(functionalidade);
  }

  return (
    <View style={styles.contentFoother}>
      {
        funcionalidades?.map(funcionalidade => (
          <TouchableOpacity 
            key={String(funcionalidade)}
            onPress={ () => handleToFunction(funcionalidade) }
          > 
            { 
              funcionalidade === selected
                ? <Text style={styles.functionSelected}> {funcionalidade} </Text>
                :  <Text style={styles.functions}> {funcionalidade} </Text>

            }

          </TouchableOpacity>
          
        ))
      }
    </View>
  )
}

export default Foother;