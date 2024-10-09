import {useStores} from '@hooks/root-store';
import React from 'react';
import {Text, View} from 'react-native';
import {Container, styles} from './styles';

export const PersonalData = () => {
  function hideEmail(e) {
    const mail = e.split('@');
    return mail[0].slice(0, 1) + '*'.repeat(mail[0].length - 1) + '@' + mail[1];
  }
  const {user} = useStores();
  return (
    <Container>
      <View style={styles.card}>
        <Text style={styles.title}>Nome completo</Text>
        <Text style={styles.subtitle}>{user?.name}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Meu CPF/CNPJ</Text>
        <Text style={styles.subtitle}>{user?.doccument}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Telefone</Text>
        <Text style={styles.subtitle}>
          {user?.cel.slice(0, 4) + ' *****-' + user?.cel.slice(11)}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>E-mail</Text>
        <Text style={styles.subtitle}>{hideEmail(user?.email)}</Text>
      </View>
    </Container>
  );
};
