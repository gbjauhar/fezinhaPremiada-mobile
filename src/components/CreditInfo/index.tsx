import React from 'react';
import {Container, ValueContainer, ValueInfo, InfoText, Value} from './styles';

import Money from '../../assets/credit.svg';
import Coin from '../../assets/coins.svg';

import theme from '@theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {formatValue} from '@utils/formatValue';

interface CreditInfoProps {
  commissions: number;
  credit?: number;
}

export const CreditInfo = ({commissions, credit}: CreditInfoProps) => {
  return (
    <Container>
      <ValueContainer>
        <ValueInfo>
          <Money
            color={theme.colors.icons}
            width={RFValue(22)}
            height={RFValue(22)}
          />

          <InfoText numberOfLines={1}>Crédito disponível</InfoText>
        </ValueInfo>

        <Value numberOfLines={1}>{formatValue(credit)}</Value>
      </ValueContainer>

      <ValueContainer>
        <ValueInfo>
          <Coin
            color={theme.colors.icons}
            width={RFValue(20)}
            height={RFValue(20)}
          />

          <InfoText numberOfLines={1}>Comissões</InfoText>
        </ValueInfo>

        <Value numberOfLines={1}>{formatValue(commissions)}</Value>
      </ValueContainer>
    </Container>
  );
};
