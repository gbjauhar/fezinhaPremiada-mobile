import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Wallet from 'react-native-vector-icons/Fontisto';
import Value from 'react-native-vector-icons/FontAwesome5';
import Card from 'react-native-vector-icons/Ionicons';
import pixImg from '../../assets/pix.png';
import Arrow from 'react-native-vector-icons/AntDesign';

import theme from '@theme';
import {useNavigate} from '@hooks/useNavigate';
import {useStores} from '@hooks/root-store';

const options = [
  {
    id: 'dinheiro (crédito de venda)',
    title: 'Em dinheiro',
    subtitle: 'Crédito de venda',
    pic: <Wallet name="wallet" size={32} color={theme.colors.title} />,
  },
  {
    id: 'dinheiro (saldo)',
    title: 'Em dinheiro',
    subtitle: 'Com saldo',
    pic: <Value name="money-bill" size={25} color={theme.colors.title} />,
  },
  {
    id: 'cartão de crédito',
    title: 'Crédito',
    subtitle: 'Cartão de crédito',
    pic: <Card name="card" size={32} color={theme.colors.title} />,
    disabled: true,
  },
  {
    id: 'PIX',
    title: 'PIX',
    subtitle: 'Pagar com PIX',
    pic: <Image source={pixImg} />,
  },
];

export const PayingCard = () => {
  const {setPayment} = useStores();
  const navigation = useNavigate();
  const handlePress = (id: string) => {
    setPayment(id);
    navigation.navigate('Order');
  };
  return (
    <View style={styles.container}>
      {options.map(o => (
        <TouchableOpacity
          style={[styles.card, {opacity: o.disabled ? 0.3 : 1}]}
          onPress={() => handlePress(o.id)}
          disabled={o.disabled}
          activeOpacity={0.8}
          key={o.subtitle}>
          <View style={styles.left}>
            <>{o.pic}</>
            <View>
              <Text style={styles.title}>{o.title}</Text>
              <Text style={styles.subtitle}>{o.subtitle}</Text>
            </View>
          </View>
          <Arrow name="arrowright" size={25} color={theme.colors.title} />
        </TouchableOpacity>
      ))}
    </View>
  );
};
