import styled from 'styled-components/native';
import {Controller} from 'react-hook-form';
import {TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Text} from '@components/Text';
import {TextInputMask as RNTextInputMask} from 'react-native-masked-text';
import {InputStyleProps} from './input.props';

export const Container = styled(Controller)``;

export const Input = styled(TextInput)<InputStyleProps>`
  background-color: ${({theme}) => theme.colors.input};
  color: ${({theme}) => theme.colors.titleDark};
  border-color: ${({theme, error}) =>
    error ? theme.colors.status.danger : theme.colors.input};
  border-width: ${RFValue(1)}px;
  width: 100%;

  padding: ${RFValue(16)}px;
  min-height: ${RFValue(56)}px;

  border-radius: ${RFValue(8)}px;
`;

export const Fieldset = styled.View`
  margin-bottom: ${RFValue(6)}px;
  width: 100%;
`;

export const Label = styled(Text)`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fontFamily.regular};
  color: ${({theme}) => theme.colors.subtitle};
`;

export const ErrorText = styled(Text)`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fontFamily.regular};
  color: ${({theme}) => theme.colors.status.danger};
`;

export const TextInputMask = styled(RNTextInputMask)<InputStyleProps>`
  background-color: ${({theme}) => theme.colors.input};
  color: ${({theme}) => theme.colors.titleDark};
  border-color: ${({theme, error}) =>
    error ? theme.colors.status.danger : theme.colors.input};
  border-width: ${RFValue(1)}px;
  width: 100%;

  padding: ${RFValue(16)}px;
  min-height: ${RFValue(56)}px;

  border-radius: ${RFValue(8)}px;
`;
