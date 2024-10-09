import React, {ReactNode} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Container, styles} from './styles';
import {useNavigate} from '@hooks/useNavigate';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Material from 'react-native-vector-icons/MaterialIcons';
import theme from '@theme';
import Deposit from '../../assets/deposit.svg';
import Sale from '../../assets/sales.svg';
import {RootStackParamList} from '../../@types/routes';

interface Cards {
  title: string;
  pic: ReactNode;
  screen: keyof RootStackParamList;
}

export const cards: Cards[] = [
  {
    title: 'Meu saldo',
    pic: <FontAwesome5 name="money-bill" size={20} color={theme.colors.link} />,
    screen: 'Balance',
  },
  {
    title: 'Depositar',
    pic: <Deposit />,
    screen: 'DepositValue',
  },
  {
    title: 'Vendas',
    pic: <Sale height={25} width={25} color={theme.colors.link} />,
    screen: 'AllSales',
  },
  {
    title: 'Ganhos',
    pic: <FontAwesome5 name="piggy-bank" size={20} color={theme.colors.link} />,
    screen: 'Earnings',
  },
  {
    title: 'Clientes',
    pic: <FontAwesome name="users" size={20} color={theme.colors.link} />,
    screen: 'ClientList',
  },
  {
    title: 'Contato',
    pic: (
      <MaterialCommunity
        name="comment-text"
        size={20}
        color={theme.colors.link}
      />
    ),
    screen: 'Home',
  },
  {
    title: 'Relatórios',
    pic: (
      <Material
        name="insert-chart-outlined"
        size={20}
        color={theme.colors.link}
      />
    ),
    screen: 'Reports',
  },
  {
    title: 'Venda Rápida',
    pic: <FontAwesome name="qrcode" size={20} color={theme.colors.link} />,
    screen: 'QuickSale',
  },
];

export const HorizontalCards = () => {
  const navigation = useNavigate();

  const handlePress = async (screen: any) => {
    navigation.navigate(screen);
  };

  return (
    <Container horizontal={true}>
      {cards.map(t => (
        <TouchableOpacity
          style={styles.card}
          key={t.title}
          onPress={() => handlePress(t.screen)}>
          <>{t.pic}</>
          <Text style={styles.text}>{t.title}</Text>
        </TouchableOpacity>
      ))}
    </Container>
  );
};
