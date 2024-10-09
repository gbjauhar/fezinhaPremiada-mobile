import React from 'react';
import {Container, Section, SectionTitle, Title, Value} from './styles';
import {useRoute} from '@react-navigation/native';

interface RouteParams {
  client: UserAPI;
}

export const ClientDetail = () => {
  const route = useRoute();
  const {client} = route.params as RouteParams;

  return (
    <Container>
      <SectionTitle>Dados pessoais</SectionTitle>
      <Section>
        <Title>Nome</Title>
        <Value>{client.name}</Value>
      </Section>

      <Section>
        <Title>Telefone</Title>
        <Value>{client.cel}</Value>
      </Section>

      <Section>
        <Title>E-mail</Title>
        <Value>{client.email}</Value>
      </Section>

      <Section>
        <Title>CPF/CNPJ</Title>
        <Value>{client.doccument}</Value>
      </Section>

      <SectionTitle>Endereço</SectionTitle>
      <Section>
        <Title>CEP</Title>
        <Value>{client.cep ?? 'Não preenchido'}</Value>
      </Section>

      <Section>
        <Title>Endereço/Logradouro</Title>
        <Value>{client.address ?? 'Não preenchido'}</Value>
      </Section>

      <Section>
        <Title>Número da residência</Title>
        <Value>{client.residence_number ?? 'Não preenchido'}</Value>
      </Section>

      <Section>
        <Title>Bairro</Title>
        <Value>{client.neighborhood ?? 'Não preenchido'}</Value>
      </Section>

      <Section>
        <Title>Complemento</Title>
        <Value>{client.complement ?? 'Não preenchido'}</Value>
      </Section>

      <Section>
        <Title>Cidade</Title>
        <Value>{client.city ?? 'Não preenchido'}</Value>
      </Section>

      <Section>
        <Title>UF</Title>
        <Value>{client.uf ?? 'Não preenchido'}</Value>
      </Section>
    </Container>
  );
};
