import React from 'react';
import {Container, Spinner} from './styles';
import {Modal} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import theme from '@theme';

interface TransparentLoadingProps {
  visible: boolean;
}

export const TransparentLoading = ({visible}: TransparentLoadingProps) => {
  return (
    <Modal transparent visible={visible}>
      <Container>
        <Spinner size={RFValue(50)} color={theme.colors.title} />
      </Container>
    </Modal>
  );
};
