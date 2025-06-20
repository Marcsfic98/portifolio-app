import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View,Text } from 'react-native';

import { styles } from './styles';
import { Photo } from '../../components/Photo';
import { Button } from '../../components/Button';

export function Home() {
  return (
    <View style={styles.container}>
      <Photo/>
      <Text style={styles.text}>Marcos Ribeiro</Text>
      <Button text='Linkedin' />
      <Button text='GitHub' />
      <Button text='Email' />
       <StatusBar style="auto" />
    </View>
  );

}