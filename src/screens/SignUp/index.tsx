import React from 'react';
import {Container, Subtitle, Title, Image} from './styles';
import Form from '../../components/SignUpForm/index';
import logoImg from '../../assets/logo.png';

export const SignUp = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Cadastro</Title>
      <Subtitle>
        Crie uma conta para acessar seu ponto de vendas móvel.
      </Subtitle>
      <Form />
    </Container>
  );
};
