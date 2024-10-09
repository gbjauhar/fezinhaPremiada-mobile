import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface DozenStyleProps {
  selected: boolean;
}

export const Container = styled.TouchableOpacity<DozenStyleProps>`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: ${RFValue(55) / 2}px;
  margin-right: ${RFValue(8)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme, selected}) =>
    selected ? theme.colors.buttonBackground : theme.colors.background};
`;

export const NumberText = styled(Text).attrs({
  fontWeight: 'bold',
})<DozenStyleProps>`
  font-size: ${RFValue(20)}px;
  color: ${({theme, selected}) =>
    selected ? theme.colors.titleDark : theme.colors.title};
`;
