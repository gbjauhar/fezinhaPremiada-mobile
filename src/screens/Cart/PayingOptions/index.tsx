import React, {useEffect} from 'react';
import {PayingCard} from '@components/PayingCard';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Container, styles} from './styles';
import {useNavigate} from '@hooks/useNavigate';
import {useStores} from '@hooks/root-store';
import {observer} from 'mobx-react-lite';
import {formatValue} from '@utils/formatValue';
import EscPosPrinter, {
  getPrinterSeriesByName,
} from 'react-native-esc-pos-printer';

export const PayingOptions = observer(() => {
  const {user, cartStore} = useStores();
  const navigation = useNavigate();

  async function handleGetPrinters() {
    const printers = await EscPosPrinter.discover();

    console.log({printers});
  }

  useEffect(() => {
    handleGetPrinters();
  }, []);

  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.main}>
          <Text style={styles.title}>Como seu cliente {'\n'}quer pagar?</Text>
          <Text style={styles.subtitle}>
            Valor total a pagar:{' '}
            <Text style={styles.subtitleBold}>
              {formatValue(cartStore.totalCartValue)}
            </Text>
          </Text>
          <PayingCard />
        </View>
      </Container>
      <View style={styles.footer}>
        <Text style={styles.footer.title}>Crédito para venda:</Text>
        <Text style={styles.footer.subtitle}>{formatValue(user?.credit)}</Text>
      </View>
    </View>
  );
});
