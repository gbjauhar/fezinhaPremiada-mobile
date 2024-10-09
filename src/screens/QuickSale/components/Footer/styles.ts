import {PrimaryButton} from '@components/PrimaryButton';
import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(22)}px ${RFValue(24)}px;

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  background-color: ${({theme}) => theme.colors.cardBackground};
`;

export const InfoContainer = styled.View``;

export const Label = styled(Text)``;

export const Value = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const Button = styled(PrimaryButton)``;
