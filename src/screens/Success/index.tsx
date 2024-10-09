import React from 'react';
import {Container, CheckIcon, Title, Description, Button} from './styles';
import {useRoute} from '@react-navigation/native';
import {useNavigate} from '@hooks/useNavigate';

interface SuccessRouteParams {
  title?: string;
  message: string;
}

export const Success = () => {
  const route = useRoute();
  const {title, message} = route.params as SuccessRouteParams;
  const navigation = useNavigate();

  function handleGoHome() {
    navigation.reset({
      index: 1,
      routes: [
        {name: 'Home'},
        {
          name: 'CreditHistory',
        },
      ],
    });
  }

  return (
    <Container>
      <CheckIcon name="check-circle" />

      <Title>{title ?? 'Sucesso!'}</Title>
      <Description>{message}</Description>

      <Button onPress={handleGoHome}>Continuar</Button>
    </Container>
  );
};
