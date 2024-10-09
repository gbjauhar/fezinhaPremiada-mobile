import React, { ReactNode } from 'react';
import { Container, Title, Option } from './styles';
import Feather from 'react-native-vector-icons/Feather';
import theme from '@theme';
import { useNavigate } from '@hooks/useNavigate';

interface Props {
  name: string;
  secondOption?: ReactNode;
}

export const Header = ({ name, secondOption }: Props) => {
  const navigation = useNavigate();

  return (
    <Container>
      <Option>
        <Feather
          name="chevron-left"
          size={24}
          color={theme.colors.white}
          onPress={navigation.goBack}
        />
      </Option>

      <Title>{name}</Title>
      <Option>{secondOption}</Option>
    </Container>
  );
};
