import React from 'react';
import {Container, Header, Title, Description, Value, DateText} from './styles';
import {format} from 'date-fns';
import {formatValue} from '@utils/formatValue';

interface ComissionCardProps {
  title: string;
  description: string;
  value?: number;
  created_at: Date | string;
}

export const ComissionCard = ({
  title,
  description,
  value,
  created_at,
}: ComissionCardProps) => {
  return (
    <Container>
      <Header>
        <Title numberOfLines={1}>{title}</Title>

        <DateText>{format(new Date(created_at), 'dd/MM/yyyy')}</DateText>
      </Header>

      <Description>{description}</Description>

      {value ? <Value>{formatValue(value)}</Value> : null}
    </Container>
  );
};
