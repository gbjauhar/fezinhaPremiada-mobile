import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(70)}px;
  height: ${RFValue(40)}px;
  margin-right: ${RFValue(8)}px;
  border-radius: ${RFValue(8)}px;
  align-items: center;
  justify-content: center;

  background-color: ${({theme, selected}) =>
    selected ? theme.colors.buttonBackground : theme.colors.background};
`;

export const OptionText = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(12)}px;
  color: ${({theme, selected}) =>
    selected ? theme.colors.titleDark : theme.colors.title};
`;
