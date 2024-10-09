import {HorizontalCards} from '@components/HorizontalCard';
import {InfoMenu} from '@components/InfoMenu';
import React, {useCallback} from 'react';
import {ProductCard} from '@components/ProductCard';
import ImgSvg from '../../assets/Frame.svg';
import {Text, TouchableOpacity, View} from 'react-native';
import {Container, styles} from './styles';
import Config from '../../assets/cog.svg';
import {BottomMenu} from '@components/BottomMenu';
import {useNavigate} from '@hooks/useNavigate';
import {useStores} from '@hooks/root-store';
import {api} from '@services/api';
import {useFocusEffect} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';

export const Home = observer(() => {
  const {user, setUser} = useStores();
  const navigation = useNavigate();

  const handleUpdateUser = useCallback(
    (userData: UserAPI) => {
      if (userData && user) {
        setUser({
          ...user,
          name: userData.name,
          value: userData.value,
          cel: userData.cel,
          credit: userData.credit,
          credit_limit: userData.credit_limit,
          doccument: userData.doccument,
          email: userData.email,
          id: userData.id,
          updated_at: userData.updated_at.toString(),
        });
      }
    },
    [user, setUser],
  );

  const updateOnFocus = useCallback(() => {
    api
      .get<UserAPI>('profile')
      .then(response => handleUpdateUser(response.data));
  }, [handleUpdateUser]);

  useFocusEffect(updateOnFocus);

  return (
    <Container>
      <View style={styles.topmenu}>
        <ImgSvg width={80} height={30} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Menu');
          }}>
          <Config height={25} width={25} color={'gray'} />
        </TouchableOpacity>
      </View>
      <InfoMenu value={user?.value ?? 0} credit={user?.credit ?? 0} />
      <View>
        <Text style={styles.title}>O que você quer fazer?</Text>
      </View>
      <HorizontalCards />

      <Text style={styles.title}>Produtos</Text>
      <ProductCard />
      <BottomMenu />
    </Container>
  );
});
