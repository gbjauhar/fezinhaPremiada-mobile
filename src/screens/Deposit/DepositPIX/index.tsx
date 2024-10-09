import React from 'react';
import {Container, Title, QRCode, Footer, Share} from './styles';
import qrCode from '../../../assets/qr.png';
import {WhatsappButton} from '@components/WhatsappButton';

export const DepositPIX = () => {
  return (
    <Container>
      <Title>
        Escaneie o QR Code abaixo, ou clique aqui para digitar a chave pix.
      </Title>

      <QRCode source={qrCode} resizeMode="contain" />

      <Footer>
        <WhatsappButton contentToShare="handleShareWhatsapp" />
        <Share contentToShare="handleShareWhatsapp" />
      </Footer>
    </Container>
  );
};
