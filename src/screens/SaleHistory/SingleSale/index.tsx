import React, {useState} from 'react';
import {PrimaryButton} from '@components/PrimaryButton';
import {Text} from '@components/Text';
import {Alert, Share, View} from 'react-native';
import {Container, styles} from './styles';
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '@theme';
import {BuyerCard} from '@screens/SaleHistory/components/BuyerCard';
import {SaleDetails} from '../components/SaleDetails';

import {WhatsappButton} from '@components/WhatsappButton';

interface RouteParams {
  sales: SalesAPI;
}
export const SingleSale = () => {
  const route = useRoute();
  const {sales} = route.params as RouteParams;
  console.log(sales);
  const [loading, setLoading] = useState(false);
  const options = {
    message: `Nome: ${sales.name},
      Forma de pagamento: ${sales.payment_form}`,
  };

  const handleShare = async (customOptions = options) => {
    setLoading(true);
    try {
      await Share.share(customOptions);
      setLoading(false);
    } catch (error: any) {
      Alert.alert(error);
      setLoading(false);
    }
  };

  return (
    <Container>
      <BuyerCard sales={sales} />
      <View style={styles.links}>
        <Text style={styles.title}>Links de detalhes da venda</Text>

        <WhatsappButton contentToShare={options.message} />
        <PrimaryButton
          onPress={async () => {
            await handleShare();
          }}
          loading={loading}
          textProps={{style: styles.whatsappButton.text}}
          style={styles.shareButton}
          icon={
            <Ionicons
              name="arrow-redo-outline"
              size={20}
              color={theme.colors.white}
            />
          }>
          Compartilhar
        </PrimaryButton>
      </View>
      {sales.buyed_titles.titles?.map(t => (
        <SaleDetails titles={t} description={sales.description} key={t.id} />
      ))}
    </Container>
  );
};
