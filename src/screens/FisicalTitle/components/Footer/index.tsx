import React from 'react';
import {Container, Options, Option, ChangeText, ValueLabel} from './styles';
import {PrimaryButton} from '@components/PrimaryButton';
import {formatValue} from '@utils/formatValue';

interface FooterProps {
  total: number;
  onConfirm?: () => void;
}

export const Footer = ({total, onConfirm}: FooterProps) => {
  return (
    <Container>
      <Options>
        <Option width="35%">
          <ValueLabel>Valor total:</ValueLabel>

          <ChangeText>{formatValue(total)}</ChangeText>
        </Option>
      </Options>

      <PrimaryButton onPress={onConfirm}>Vender agora</PrimaryButton>
    </Container>
  );
};
