import React from 'react';
import {Linking} from 'react-native';
import {Container, Icon} from './styles';
import theme from '@theme';

interface WhatsappButtonProps {
  contentToShare: string;
}

export const WhatsappButton = ({contentToShare}: WhatsappButtonProps) => {
  function handleShareWhatsapp() {
    Linking.openURL(`https://wa.me?text=${contentToShare}`);
  }

  return (
    <Container
      icon={<Icon name="whatsapp" color={theme.colors.subtitle} />}
      onPress={handleShareWhatsapp}>
      Enviar no WhatsApp
    </Container>
  );
};
