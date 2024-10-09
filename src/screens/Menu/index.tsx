import React from 'react';
import {Share, Text, View} from 'react-native';
import {Container, styles} from './styles';
import User from 'react-native-vector-icons/FontAwesome';

import {UserOptions} from '@components/UserOptions';
import theme from '@theme';
import {useStores} from '@hooks/root-store';

export const Menu = () => {
  const {user} = useStores();

  async function handleCopyToClipboard() {
    if (user?.code) {
      await Share.share({
        message: user?.code,
        url: user?.code,
        title: 'Compartilhar código',
      });
    }
  }

  return (
    <Container>
      <View style={styles.header}>
        <User name="user-circle" size={40} color={theme.colors.white} />
        <View>
          <Text style={styles.title}>Olá, {user?.name}</Text>
          <Text style={styles.subtitle} onPress={handleCopyToClipboard}>
            Seu código de vendedor: {user?.code}
          </Text>
        </View>
      </View>
      <UserOptions />
    </Container>
  );
};
