import React from 'react';
import {Container, Option, Icon, Title} from './styles';
import {useNavigate} from '@hooks/useNavigate';

export const ReportsMenu = () => {
  const {navigate} = useNavigate();

  return (
    <Container>
      <Option onPress={() => navigate('CommissionsReport')}>
        <Icon name="coins" />

        <Title>Comissões</Title>
      </Option>

      <Option onPress={() => navigate('ClientSales')}>
        <Icon name="dollar-sign" />

        <Title>Vendas totais por cliente</Title>
      </Option>

      <Option onPress={() => navigate('Winners')}>
        <Icon name="users" />

        <Title>Ganhadores</Title>
      </Option>
    </Container>
  );
};
