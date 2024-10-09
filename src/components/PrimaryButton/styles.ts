import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  padding: ${RFValue(16)}px;
  background-color: ${({theme, disabled}) =>
    disabled ? theme.colors.placeholder : theme.colors.buttonBackground};
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(8)}px;
`;

export const ButtonText = styled(Text)`
  color: ${({theme}) => theme.colors.buttonText};
  font-size: ${RFValue(19)}px;
`;
