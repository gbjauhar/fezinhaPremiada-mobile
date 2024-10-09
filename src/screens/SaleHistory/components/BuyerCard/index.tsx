import React from 'react';
import {Text} from '@components/Text';
import {View} from 'react-native';
import {styles} from './styles';
import {formatDate, formatValue} from '@utils/formatValue';

interface RouteParams {
  sales: SalesAPI;
}

export const BuyerCard = ({sales}: RouteParams) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Cliente: <Text>{sales.buyed_titles.user.name}</Text>
      </Text>
      <Text style={styles.title}>
        Data e Hora: <Text>{formatDate(sales.buyed_titles.created_at)}</Text>
      </Text>
      <Text style={styles.title}>
        CPF: <Text>{sales.buyed_titles.user.doccument}</Text>
      </Text>
      <Text style={styles.title}>
        Valor Total: <Text>{formatValue(sales.buyed_titles.total)}</Text>
      </Text>
      <Text style={styles.title}>
        Forma de Pagamento: <Text>{sales.buyed_titles.payment_form}</Text>
      </Text>
      <Text style={styles.title}>
        Referência: <Text>{sales.buyed_titles.reference}</Text>
      </Text>
      <Text style={styles.title}>
        Situação:{' '}
        <Text>
          {sales.buyed_titles.status === 'PENDING'
            ? 'Aguardando pagamento'
            : 'CANCEL'
            ? 'Cancelada'
            : 'Concluída'}
        </Text>
      </Text>
    </View>
  );
};
