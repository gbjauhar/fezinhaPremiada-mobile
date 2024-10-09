import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;

  height: 20%;
  background-color: ${({theme}) => theme.colors.cardBackground};
  border: 1px solid ${({theme}) => theme.colors.cardBorder};
  border-bottom-width: 0;
  border-radius: ${RFValue(14)}px;
`;

export const Divisor = styled.View`
  position: absolute;
  right: 48.9%;
  top: 40%;
  height: ${RFValue(110)}px;

  transform: rotate(-20deg);

  width: ${RFValue(450)}px;
  background-color: ${({theme}) => theme.colors.cardBackground};
  z-index: 1;
`;

export const LuckyContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(8)}px;
  width: 45%;

  z-index: 2;
`;

export const LuckyNumber = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.icons};
`;

export const LuckyLabel = styled(Text)`
  font-size: ${RFValue(12)}px;
`;

export const ChanceContainer = styled.View`
  width: 55%;

  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.buttonBackground};
  height: 100%;
  padding: ${RFValue(8)}px;
  border-top-right-radius: ${RFValue(14)}px;
`;

export const ChanceNumber = styled(Text)`
  color: ${({theme}) => theme.colors.titleDark};
  font-size: ${RFValue(14)}px;
  top: ${RFValue(6)}px;

  z-index: 2;
`;

export const ChanceValue = styled(Text).attrs({
  fontWeight: 'bold',
})`
  color: ${({theme}) => theme.colors.titleDark};
  font-size: ${RFValue(14)}px;
`;
