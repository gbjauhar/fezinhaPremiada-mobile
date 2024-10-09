import React, {useState} from 'react';
import {
  Container,
  Options,
  Option,
  ChangeIcon,
  ChangeText,
  CheckIcon,
  CogIcon,
} from './styles';
import {PrimaryButton} from '@components/PrimaryButton';

interface FooterProps {
  onPressTurn?: () => void;
  onPressChoose?: () => void;
  onPressFilter?: () => void;
  onConfirm?: () => void;
}

export const Footer = ({
  onPressTurn,
  onPressFilter,
  onPressChoose,
  onConfirm,
}: FooterProps) => {
  const [disabled, setDisabled] = useState(true);

  function handleChoose() {
    setDisabled(false);

    onPressChoose && onPressChoose();
  }

  return (
    <Container>
      <Options>
        <Option width="35%" onPress={onPressTurn}>
          <ChangeIcon />

          <ChangeText>Trocar</ChangeText>
        </Option>

        <Option width="18%" onPress={onPressFilter}>
          <CogIcon />
        </Option>

        <Option green width="40%" onPress={handleChoose}>
          <CheckIcon />

          <ChangeText green>Escolher</ChangeText>
        </Option>
      </Options>

      <PrimaryButton disabled={disabled} onPress={onConfirm}>
        Vender agora
      </PrimaryButton>
    </Container>
  );
};
