import {Text} from '@components/Text';
import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: RFValue(200),
  },
})``;

export const Main = styled.View`
  width: 80%;
`;

export const Title = styled(Text).attrs({
  fontWeight: 'bold',
})`
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(20)}px;
`;

export const Description = styled(Text)`
  margin-bottom: ${RFValue(32)}px;
  font-size: ${RFValue(14)}px;
`;

export const NumberOfTitles = styled.View`
  flex-direction: row;

  padding-left: ${RFValue(24)}px;
`;

export const BodyTitle = styled(Text)`
  margin-bottom: ${RFValue(8)}px;
  font-size: ${RFValue(14)}px;

  height: 100%;
`;

export const SelectedTitlesText = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(14)}px;

  margin-left: ${RFValue(4)}px;
  padding: ${RFValue(4)}px ${RFValue(8)}px;
  border-radius: 100px;

  background-color: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.title};
  bottom: 0.5%;
`;

export const DozensList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingLeft: RFValue(24),
    paddingRight: RFValue(16),
  },
})`
  margin-top: ${RFValue(8)}px;
` as unknown as typeof FlatList;
