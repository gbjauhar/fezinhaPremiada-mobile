import React from 'react';
import {Container, Button, ButtonText, Input} from './styles';
import {TextInputProps} from 'react-native';

type Props = TextInputProps & {
  onPressMinus: () => void;
  onPressPlus: () => void;
};

export const FooterTitle = ({onPressMinus, onPressPlus, ...rest}: Props) => {
  return (
    <Container>
      <Button onPress={onPressMinus}>
        <ButtonText>- 1</ButtonText>
      </Button>

      <Input keyboardType="numeric" blurOnSubmit={false} {...rest} />

      <Button onPress={onPressPlus}>
        <ButtonText>+ 1</ButtonText>
      </Button>
    </Container>
  );
};
