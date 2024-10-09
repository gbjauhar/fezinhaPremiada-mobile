import React, {useEffect} from 'react';
import {Container, styles} from './styles';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BuyingCard} from '@components/BuyingCard';
import {useNavigate} from '@hooks/useNavigate';
import {useStores} from '@hooks/root-store';
import {observer} from 'mobx-react-lite';
import {formatValue} from '@utils/formatValue';

export const ShowCart = observer(() => {
  const {cartStore} = useStores();
  const navigation = useNavigate();

  useEffect(() => {
    cartStore.getCart();
  }, [cartStore]);

  const handlePress = () => {
    navigation.navigate('PayingOptions');
  };

  const handleDelete = async () => {
    await cartStore.deleteAll();
  };

  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.topMenu}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Carrinho</Text>
          <View style={styles.icon}>
            <FontAwesome
              name="trash-o"
              size={20}
              color="#F24C27"
              onPress={handleDelete}
            />
          </View>
        </View>
        {cartStore.cartList.map(s => (
          <BuyingCard key={s.id} selected={s} />
        ))}
      </Container>

      <View style={styles.footer}>
        <View>
          <Text style={styles.footer.title}>Total</Text>
          <Text style={styles.footer.subtitle}>
            {formatValue(cartStore.totalCartValue)}
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
          <Text style={styles.button.text}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
