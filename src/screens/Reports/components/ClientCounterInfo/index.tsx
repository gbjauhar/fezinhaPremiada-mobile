import React from 'react';
import {
  Container,
  ValueContainer,
  ValueInfo,
  InfoText,
  Value,
  Description,
} from './styles';

import UserIcon from 'react-native-vector-icons/Feather';

import theme from '@theme';
import {RFValue} from 'react-native-responsive-fontsize';

interface EarningsInfoProps {
  commissions: number;
  title?: string;
  numberTitle?: string;
}

export const ClientCounterInfo = ({
  commissions,
  title,
  numberTitle,
}: EarningsInfoProps) => {
  return (
    <Container>
      <ValueContainer>
        <ValueInfo>
          <UserIcon
            color={theme.colors.icons}
            size={RFValue(20)}
            name="users"
          />

          <InfoText numberOfLines={1}>{title ?? 'Ganhos/Comissões'}</InfoText>
        </ValueInfo>

        <Value numberOfLines={1}>
          {commissions} {numberTitle ?? 'clientes'}
        </Value>

        <Description>
          Estes são seus clientes que compraram com você de acordo com o filtro
          de dias selecionado abaixo.
        </Description>
      </ValueContainer>
    </Container>
  );
};
