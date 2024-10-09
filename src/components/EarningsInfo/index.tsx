import React from 'react';
import {
  Container,
  ValueContainer,
  ValueInfo,
  InfoText,
  Value,
  Description,
} from './styles';

import Coin from '../../assets/coins.svg';

import theme from '@theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {formatValue} from '@utils/formatValue';

interface EarningsInfoProps {
  commissions: number;
  title?: string;
}

export const EarningsInfo = ({commissions, title}: EarningsInfoProps) => {
  return (
    <Container>
      <ValueContainer>
        <ValueInfo>
          <Coin
            color={theme.colors.icons}
            width={RFValue(20)}
            height={RFValue(20)}
          />

          <InfoText numberOfLines={1}>{title ?? 'Ganhos/Comissões'}</InfoText>
        </ValueInfo>

        <Value numberOfLines={1}>{formatValue(commissions)}</Value>

        <Description>
          Estes são seus ganhos/comissões de acordo com o filtro de dias
          selecionado abaixo.
        </Description>
      </ValueContainer>
    </Container>
  );
};
