import React from 'react';
import { View ,Image } from 'react-native';

import { styles } from './style';

export function Photo() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../assets/images/photo.jpg')} />
    </View>
  );
}