import {Text} from '@components/Text';
import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 ${RFValue(24)}px;
`;

export const Main = styled.FlatList.attrs({
  contentContainerStyle: {
    gap: 8,
  },
})`` as unknown as typeof FlatList;

export const EmptyText = styled(Text)``;
