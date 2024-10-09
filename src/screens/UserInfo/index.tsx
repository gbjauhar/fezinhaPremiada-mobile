import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {useNavigate} from '@hooks/useNavigate';
import theme from '@theme';

export const UserInfo = () => {
  const navigation = useNavigate();
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => navigation.navigate('PersonalData')}>
        <View style={styles.card}>
          <View style={styles.left}>
            <Icon
              name="card-account-details-outline"
              size={20}
              color={theme.colors.title}
            />
            <Text style={styles.title}>Dados pessoais</Text>
          </View>
          <Icon name="chevron-right" size={20} color={theme.colors.title} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Address')}>
        <View style={styles.card}>
          <View style={styles.left}>
            <Icon name="map-marker" size={20} color={theme.colors.title} />
            <Text style={styles.title}>Endereço</Text>
          </View>
          <Icon name="chevron-right" size={20} color={theme.colors.title} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('UpdatePassword')}>
        <View style={styles.card}>
          <View style={styles.left}>
            <Icon name="security" size={20} color={theme.colors.title} />
            <Text style={styles.title}>Senha de acesso</Text>
          </View>
          <Icon name="chevron-right" size={20} color={theme.colors.title} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
