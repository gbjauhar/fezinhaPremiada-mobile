import {PrimaryButton} from '@components/PrimaryButton';
import {Text} from '@components/Text';
import {SectionList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Button = styled(PrimaryButton)`
  margin: ${RFValue(16)}px ${RFValue(24)}px;
  padding: ${RFValue(10)}px;
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

export const AlertButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;

  margin: 0 auto ${RFValue(32)}px;
  padding: ${RFValue(10)}px ${RFValue(8)}px;
  background-color: ${({theme}) => theme.colors.cardBackground};
  border: 1px solid ${({theme}) => theme.colors.cardBorder};
  border-radius: ${RFValue(8)}px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoText = styled(Text)`
  color: ${({theme}) => theme.colors.status.required};
  font-size: ${RFValue(14)}px;
  margin-left: ${RFValue(8)}px;
`;

export const ValueText = styled(Text).attrs({
  fontWeight: 'bold',
})`
  color: ${({theme}) => theme.colors.status.required};
  font-size: ${RFValue(17)}px;
  margin-left: ${RFValue(8)}px;
`;
