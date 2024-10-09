import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={styles.container.color} />
  </View>
);

export default Loading;
