import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${RFValue(8)}px;
  height: ${RFValue(32)}px;

  width: 100%;

  margin-top: ${RFValue(24)}px;
`;

export const Input = styled.TextInput`
  background-color: ${({theme}) => theme.colors.input};
  border-radius: ${RFValue(8)}px;
  border: 1px solid ${({theme}) => theme.colors.inputBorder};
  height: 100%;
  width: 20%;

  padding: ${RFValue(8)}px ${RFValue(12)}px;
  text-align: center;

  color: ${({theme}) => theme.colors.grey};
  font-family: ${({theme}) => theme.fontFamily.bold};
`;

export const Button = styled.TouchableOpacity`
  border: 1px solid ${({theme}) => theme.colors.icons};
  border-radius: ${RFValue(8)}px;
  width: ${RFValue(38)}px;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text).attrs({
  fontWeight: 'bold',
})`
  color: ${({theme}) => theme.colors.icons};
`;
