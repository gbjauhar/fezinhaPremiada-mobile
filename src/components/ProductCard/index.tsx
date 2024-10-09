import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Sell from '../../assets/sell.svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import theme from '@theme';
import {useNavigate} from '@hooks/useNavigate';

export const ProductCard = () => {
  const navigation = useNavigate();

  function handleGoTitles() {
    navigation.navigate('Titles');
  }

  function handleGoScanTitles() {
    navigation.navigate('TitleScan');
  }

  return (
    <View style={styles.container}>
      <View style={styles.secondCard}>
        <View style={styles.titleContainer}>
          <Sell height={25} width={25} color={theme.colors.link} />
          <Text style={styles.secondCard.title}>Venda Online</Text>
        </View>
        <Text style={styles.secondCard.subtitle}>
          Venda de título totalmente digital, através do seu celular ou POS.
        </Text>
        <TouchableOpacity
          onPress={handleGoTitles}
          style={styles.firstCard.button}>
          <Text style={styles.secondCard.button.text}>Realizar venda</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.firstCard}>
        <View style={styles.titleContainer}>
          <FontAwesome name="qrcode" size={20} color={theme.colors.link} />
          <Text style={styles.firstCard.title}>Venda Física</Text>
        </View>
        <Text style={styles.firstCard.subtitle}>
          Título em Flyer! Informe o título com seu digito verificador e forma
          de pagamento,
        </Text>
        <TouchableOpacity
          onPress={handleGoScanTitles}
          style={styles.firstCard.button}>
          <Text style={styles.firstCard.button.text}>Realizar venda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
