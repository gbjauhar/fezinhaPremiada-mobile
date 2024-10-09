import React, {useEffect, useState} from 'react';
import {Container, Subtitle, Title, Image} from './styles';
import Form from '../../components/SignInForm/index';
import logoImg from '../../assets/logo.png';
import {useNavigate} from '@hooks/useNavigate';
import Loading from '@components/Loading';
import {TouchableWithoutFeedback} from 'react-native';

export const SignIn = () => {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  function handlePressLogo() {
    setCounter(state => state + 1);
    if (counter === 8) {
      setCounter(0);
      navigation.navigate('Dev');
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
    };
    fetchData();
  }, [navigation]);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <Container>
        <TouchableWithoutFeedback onPress={handlePressLogo}>
          <Image source={logoImg} />
        </TouchableWithoutFeedback>

        <Title>Login</Title>
        <Subtitle>
          Faça login abaixo e acesse o seu ponto de vendas móvel.
        </Subtitle>
        <Form />
      </Container>
    );
  }
};
