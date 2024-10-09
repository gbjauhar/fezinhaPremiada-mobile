import React from 'react';
import {
  Container,
  Content,
  Img,
  Header,
  Title,
  Description,
  Label,
  Value,
  DateText,
} from './styles';
import {format} from 'date-fns';
import logoImg from '../../../../assets/logo.png';

interface ReportTitleCardProps {
  title: string;
  description: string;
  doccument: string;
  created_at: Date | string;
}

export const ReportTitleCard = ({
  title,
  description,
  doccument,
  created_at,
}: ReportTitleCardProps) => {
  return (
    <Container>
      <Img source={logoImg} resizeMode="contain" />

      <Content>
        <Header>
          <Title numberOfLines={1}>{title}</Title>

          <DateText>{format(new Date(created_at), 'dd/MM/yyyy')}</DateText>
        </Header>

        <Description numberOfLines={2}>Ganhador: {description}</Description>

        <Label>
          CPF/CNPJ: <Value>{doccument}</Value>
        </Label>
      </Content>
    </Container>
  );
};
