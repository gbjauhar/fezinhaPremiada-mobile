import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {PrimaryButton} from '@components/PrimaryButton';

export const Container = styled.View`
  padding: ${RFValue(12)}px;
  width: 100%;

  background-color: ${({theme}) => theme.colors.cardBackground};
  border-radius: ${RFValue(14)}px;
  border: 1px solid ${({theme}) => theme.colors.cardBorder};

  gap: ${RFValue(6)}px;
`;

export const Name = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(6)}px;
`;

export const Email = styled(Text)``;

export const Phone = styled(Text)``;

export const MailIcon = styled(Feather).attrs({
  name: 'mail',
})`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.icons};
`;

export const SmartphoneIcon = styled(Feather).attrs({
  name: 'smartphone',
})`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.icons};
`;

export const CityIcon = styled(Feather).attrs({
  name: 'map',
})`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.icons};
`;

export const Option = styled.View`
  flex-direction: row;
  gap: ${RFValue(8)}px;
`;

export const Button = styled(PrimaryButton)`
  margin-top: ${RFValue(12)}px;
`;
