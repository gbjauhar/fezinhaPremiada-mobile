import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Container, styles} from './styles';
import Share from 'react-native-share';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigate} from '@hooks/useNavigate';

const options = {
  url: 'https://blog.logrocket.com/sharing-content-react-native-apps-using-react-native-share/',
  message: 'Use meu código de vendedor!',
};

export const QrCode = () => {
  const navigation = useNavigate();
  const handleShare = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (error: any) {
      Alert.alert(error);
    }
  };
  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.topMenu}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.topMenu.text}>Pagamento</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.subtitle}>
            Envie o PIX COPIA E COLA para seu cliente ou peça para que ele
            escaneie o QR Code abaixo.
          </Text>
        </View>
      </Container>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.send}>
          <FontAwesome
            name="whatsapp"
            size={20}
            color={styles.send.text.color}
          />
          <Text style={styles.send.text}> Enviar no WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.share}
          onPress={async () => {
            await handleShare();
          }}>
          <>
            <MaterialCommunity
              name="share-outline"
              size={20}
              color={styles.share.text.color}
            />

            <Text style={styles.share.text}> Compartilhar</Text>
          </>
        </TouchableOpacity>
      </View>
    </View>
  );
};
