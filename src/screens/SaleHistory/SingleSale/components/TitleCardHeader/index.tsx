import React from 'react';
import {
  Container,
  LuckyContainer,
  LuckyNumber,
  LuckyLabel,
  ChanceContainer,
  ChanceNumber,
  ChanceValue,
  Divisor,
} from './styles';
import { formatValue } from '@utils/formatValue';

interface TitleCardHeaderProps {
  name: string;
  chance: number;
  price: number;
}

export const TitleCardHeader = ({
  name,
  chance,
  price,
}: TitleCardHeaderProps) => {
  return (
    <Container>
      <LuckyContainer>
        <LuckyNumber>{name}</LuckyNumber>
        <LuckyLabel>Número da sorte</LuckyLabel>
      </LuckyContainer>

      <Divisor />

      <ChanceContainer>
        <ChanceNumber numberOfLines={1}>
          {chance} Chance: <ChanceValue>{formatValue(price)}</ChanceValue>
        </ChanceNumber>
      </ChanceContainer>
    </Container>
  );
};
