import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface FilterStyleProps {
  selected: boolean;
}

export const Container = styled.FlatList`` as unknown as typeof FlatList;

export const Filter = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<FilterStyleProps>`
  margin-right: ${RFValue(16)}px;
  padding: ${RFValue(6)}px ${RFValue(12)}px;

  border: 1px solid
    ${({theme, selected}) =>
      selected ? theme.colors.buttonBackground : theme.colors.cardBorder};
  border-radius: ${RFValue(8)}px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const FilterText = styled.Text<FilterStyleProps>`
  font-size: ${RFValue(16)}px;
  color: ${({theme, selected}) =>
    selected ? theme.colors.buttonBackground : theme.colors.subtitle};
  font-family: ${({theme, selected}) =>
    selected ? theme.fontFamily.bold : theme.fontFamily.regular};
`;
