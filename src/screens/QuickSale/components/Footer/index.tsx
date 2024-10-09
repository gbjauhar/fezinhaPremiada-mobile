import React from 'react';
import {Container, InfoContainer, Label, Value, Button} from './styles';
import {formatValue} from '@utils/formatValue';

type Props = {
  value: number;
  onPress: () => void;
};

export const Footer = ({value, onPress}: Props) => {
  return (
    <Container>
      <InfoContainer>
        <Label>Total</Label>
        <Value>{formatValue(value)}</Value>
      </InfoContainer>

      <Button onPress={onPress}>Vender agora</Button>
    </Container>
  );
};
