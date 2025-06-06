import styled from 'styled-components/native';
import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import {Input} from '@components/Input';
import {PrimaryButton} from '@components/PrimaryButton';

export const Container = styled.View`
  padding: 0 ${RFValue(24)}px;
  align-items: flex-start;
  justify-content: space-between;

  height: 90%;
`;

export const HeaderContent = styled.View`
  width: 100%;
`;

export const Title = styled(Text)`
  font-size: ${RFValue(16)}px;
  max-width: ${RFValue(214)}px;
`;

export const WithdrawInput = styled(Input).attrs(({theme}) => ({
  placeholderTextColor: theme.colors.placeholder,
}))`
  width: 100%;

  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.titleDark};
`;

export const Button = styled(PrimaryButton)`
  width: 100%;
`;
