import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import Foother from '../../components/Foother';
import styles from './style';

const HomePage = () => {
  return (
    <View style={styles.content}>
      <Header menu='Home' />
      <Foother />
    </View>
  )
}

export default HomePage;