import React from 'react';
import {
  Container,
  ValueContainer,
  ValueInfo,
  InfoText,
  Value,
  PrimaryButton,
  PrimaryButtonText,
  Button,
  ButtonText,
} from './styles';

import Money from '../../assets/money.svg';
import Coin from '../../assets/coins.svg';

import theme from '@theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {useStores} from '@hooks/root-store';
import {formatValue} from '@utils/formatValue';
import {useNavigate} from '@hooks/useNavigate';
import {observer} from 'mobx-react-lite';

interface BalanceInfoProps {
  commissions: number;
}

export const BalanceInfo = observer(({commissions}: BalanceInfoProps) => {
  const {user} = useStores();
  const navigation = useNavigate();

  return (
    <Container>
      <ValueContainer>
        <ValueInfo>
          <Money
            color={theme.colors.icons}
            width={RFValue(22)}
            height={RFValue(22)}
          />

          <InfoText numberOfLines={1}>Meu saldo</InfoText>
        </ValueInfo>

        <Value numberOfLines={1}>{formatValue(user?.value)}</Value>

        <PrimaryButton onPress={() => navigation.navigate('DepositValue')}>
          <PrimaryButtonText numberOfLines={1}>
            Adicionar Saldo
          </PrimaryButtonText>
        </PrimaryButton>
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

        <Button onPress={() => navigation.navigate('WithdrawValue')}>
          <ButtonText numberOfLines={1}>Sacar</ButtonText>
        </Button>
      </ValueContainer>
    </Container>
  );
});
