import {SectionList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const HistoryList = styled.SectionList`
  flex: 1;
  padding: ${RFValue(24)}px;
  margin-top: ${RFValue(18)}px;
  border-top-left-radius: ${RFValue(32)}px;
  border-top-right-radius: ${RFValue(32)}px;

  background-color: ${({theme}) => theme.colors.cardBackground};
` as unknown as typeof SectionList;

export const DayTitle = styled.Text`
  width: 100%;
  padding: ${RFValue(8)}px ${RFValue(12)}px;

  background-color: ${({theme}) => theme.colors.cardBorder};
  border-radius: ${RFValue(8)}px;

  font-family: ${({theme}) => theme.fontFamily.regular};
  color: ${({theme}) => theme.colors.buttonBackground};
  font-size: ${RFValue(16)}px;

  margin-bottom: ${RFValue(8)}px;
  margin-top: ${RFValue(16)}px;
`;

export const EmptyText = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.medium};
  color: ${({theme}) => theme.colors.subtitle};
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(8)}px;
`;

export const Spacer = styled.View`
  padding-bottom: ${RFValue(40)}px;
`;

export const ActivityIndicator = styled.ActivityIndicator`
  margin-top: ${RFValue(8)}px;
`;
