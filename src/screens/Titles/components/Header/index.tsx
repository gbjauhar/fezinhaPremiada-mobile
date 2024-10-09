import React from 'react';
import {Container, ArrowLeft, Options, Cart, OptionButton} from './styles';
import {useNavigate} from '@hooks/useNavigate';

export const Header = () => {
  const {goBack, navigate} = useNavigate();

  function handleGoCart() {
    navigate('ShowCart');
  }

  return (
    <Container>
      <ArrowLeft onPress={goBack} />

      <Options>
        <OptionButton onPress={handleGoCart}>
          <Cart />
        </OptionButton>
      </Options>
    </Container>
  );
};
