import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {useNavigate} from '@hooks/useNavigate';
import theme from '@theme';
import {useStores} from '@hooks/root-store';

export const UserOptions = () => {
  const navigation = useNavigate();
  const {signOut, user} = useStores();
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => navigation.navigate('UserInfo')}>
        <View style={styles.card}>
          <View style={styles.left}>
            <Icon name="user" size={20} color={theme.colors.title} />
            <Text style={styles.title}>Meus dados</Text>
          </View>
          <Icon name="chevron-right" size={20} color={theme.colors.title} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.left}>
            <Icon name="gear" size={20} color={theme.colors.title} />
            <Text style={styles.title}>Configurações</Text>
          </View>
          <Icon name="chevron-right" size={20} color={theme.colors.title} />
        </View>
      </TouchableOpacity>

      {user?.associated_to && (
        <TouchableOpacity onPress={() => navigation.navigate('UserLink')}>
          <View style={styles.card}>
            <View style={styles.left}>
              <Icon name="link" size={20} color={theme.colors.title} />
              <Text style={styles.title}>Vincular a distribuidor</Text>
            </View>
            <Icon name="chevron-right" size={20} color={theme.colors.title} />
          </View>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => signOut()}>
        <View style={styles.card}>
          <View style={styles.left}>
            <Icon
              name="sign-out"
              size={20}
              color={theme.colors.status.required}
            />
            <Text style={styles.title}>Sair</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
