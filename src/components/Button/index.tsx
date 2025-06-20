import React from 'react';
import { View ,Text , Pressable } from 'react-native';

import { styles } from './style';

interface ButtonProps {
  text:string
}
export function Button({text}:ButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.button}>{text}</Text>
      </Pressable>
    </View>
  );
}