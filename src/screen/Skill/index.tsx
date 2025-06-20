import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View,Text } from 'react-native';

import { styles } from './style';
import { Photo } from '../../components/Photo';
import { Button } from '../../components/Button';

export function Skill() {
  return (
    <View style={styles.container}>
      <Photo/>
      <Text style={styles.text}>Minhas Habilidades</Text>
      <View style={styles.box}>
        <Text style={styles.text2}>HTML</Text>
        <Text style={styles.text2}>CSS</Text>
        <Text style={styles.text2}>JAVASCRIPT</Text>
        <Text style={styles.text2}>REACT JS</Text>
        <Text style={styles.text2}>REACT NATIVE</Text>
        <Text style={styles.text2}>UI UX</Text>
        <Text style={styles.text2}>SASS & LASS</Text>
      </View>
      <Button text='Fala comigo' />
       <StatusBar style="auto" />
    </View>
  );
}