import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Main = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: RFValue(24),
  },
})`` as unknown as typeof FlatList;
