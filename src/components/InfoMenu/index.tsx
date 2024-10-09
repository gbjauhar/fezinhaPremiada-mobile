import React, {useState} from 'react';
import {styles} from './styles';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigate} from '@hooks/useNavigate';
import Eye from 'react-native-vector-icons/Ionicons';
import Value from 'react-native-vector-icons/FontAwesome5';
import Wallet from 'react-native-vector-icons/Fontisto';
import theme from '@theme';
import {formatValue} from '@utils/formatValue';

interface Props {
  value: number;
  credit: number;
}

export const InfoMenu = ({value, credit}: Props) => {
  const navigation = useNavigate();
  const [hideValue, setHideValue] = useState(false);
  const [hideCredit, setHideCredit] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Value name="money-bill" size={15} color={theme.colors.link} />

          <Text style={styles.title}>Saldo</Text>
        </View>
        <View style={styles.valueContainer}>
          {hideValue ? (
            <Text style={styles.value}>R$ ----</Text>
          ) : (
            <Text style={styles.value}>{`${formatValue(value)}`}</Text>
          )}

          <TouchableOpacity onPress={() => setHideValue(!hideValue)}>
            <Eye name="eye" size={25} color={theme.colors.link} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Balance')}>
          <Text style={styles.buttonText}>Detalhes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Wallet name="wallet" size={15} color={theme.colors.link} />
          <Text style={styles.title}>Crédito de vendas</Text>
        </View>
        <View style={styles.valueContainer}>
          {hideCredit ? (
            <Text style={styles.value}>R$ ----</Text>
          ) : (
            <Text style={styles.value}>{`${formatValue(credit)}`}</Text>
          )}
          <TouchableOpacity onPress={() => setHideCredit(!hideCredit)}>
            <Eye name="eye" size={25} color={theme.colors.link} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CreditHistory')}>
          <Text style={styles.buttonText}>Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
