import React from 'react';
import {
  Container,
  Name,
  Email,
  Phone,
  MailIcon,
  SmartphoneIcon,
  Option,
  Button,
  CityIcon,
} from './styles';

interface ClientCardProps {
  name: string;
  cel: string;
  email: string;
  city?: string;

  onPress: () => void;
}

export const ClientCard = ({
  name,
  cel,
  city,
  email,
  onPress,
}: ClientCardProps) => {
  return (
    <Container>
      <Name>{name}</Name>

      <Option>
        <SmartphoneIcon />
        <Phone>Telefone: {cel}</Phone>
      </Option>

      <Option>
        <MailIcon />
        <Email>E-mail: {email}</Email>
      </Option>

      <Option>
        <CityIcon />
        <Email>Cidade: {city ?? 'Não preenchido'}</Email>
      </Option>

      <Button onPress={onPress}>Detalhes</Button>
    </Container>
  );
};
