import React from 'react';
import {styles} from './styles';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import logoImg from '../../assets/logo.png';
import {formatValue} from '@utils/formatValue';
import {ICartl} from '@store/cart';
import {useStores} from '@hooks/root-store';

interface CartProps {
  selected: ICartl;
}

export const BuyingCard = ({selected}: CartProps) => {
  const {cartStore} = useStores();

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={logoImg} style={styles.image} />
        <View>
          <Text style={styles.title}>{selected.name}</Text>
          <Text style={styles.subtitle}>
            {formatValue(Number(selected.price))}
          </Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.subtitle}>Chances</Text>
        <Text style={styles.title}>{selected.chances}</Text>
      </View>
      <TouchableOpacity onPress={() => cartStore.deleteItem(selected.id)}>
        <Octicons name="x-circle" size={18} color="#8690B5" />
      </TouchableOpacity>
    </View>
  );
};
