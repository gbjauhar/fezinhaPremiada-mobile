import {Text} from '@components/Text';
import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Main = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: RFValue(24),
  },
})`` as unknown as typeof FlatList;

export const FilterContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  background-color: ${({theme}) => theme.colors.buttonBackground};
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: ${RFValue(14)}px;
  margin: ${RFValue(16)}px;

  padding: ${RFValue(16)}px;
  flex-direction: row;
  align-items: center;
  gap: ${RFValue(8)}px;
`;

export const FilterIcon = styled(Feather).attrs({
  name: 'filter',
})`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.buttonTitle};
`;

export const FilterTitle = styled(Text).attrs({
  fontWeight: 'bold',
})`
  color: ${({theme}) => theme.colors.buttonTitle};
`;

export const EmptyText = styled(Text).attrs({
  fontWeight: 'bold',
})`
  color: ${({theme}) => theme.colors.subtitle};
  opacity: 0.9;
  text-align: center;
  margin-top: ${RFValue(16)}px;
`;
