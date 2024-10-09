import React, {useEffect, useState} from 'react';
import {Container, EmptyText, Main} from './styles';
import {ClientCard} from '../components/ClientCard';
import {api} from '@services/api';
import {useNavigate} from '@hooks/useNavigate';

export const ClientList = () => {
  const [clients, setClients] = useState<UserAPI[]>([]);
  const {navigate} = useNavigate();

  useEffect(() => {
    api
      .get<UserAPI[]>('sellers/clients')
      .then(response => setClients(response.data));
  }, []);

  function handleGoDetails(client: UserAPI) {
    navigate('ClientDetail', {client});
  }

  return (
    <Container>
      <Main
        data={clients}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ClientCard
            name={item.name}
            cel={item.cel}
            city={item.city}
            email={item.email}
            onPress={() => handleGoDetails(item)}
          />
        )}
        ListEmptyComponent={<EmptyText>Sem clientes que compraram</EmptyText>}
      />
    </Container>
  );
};
