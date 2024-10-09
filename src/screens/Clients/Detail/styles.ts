import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    gap: RFValue(8),
    paddingBottom: RFValue(24),
  },
})`
  flex: 1;
  padding: 0 ${RFValue(24)}px;
`;

export const SectionTitle = styled(Text).attrs({
  fontWeight: 'semiBold',
})`
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(8)}px;
`;

export const Section = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px;

  background-color: ${({theme}) => theme.colors.cardBackground};
  border: 1px solid ${({theme}) => theme.colors.cardBorder};
  border-radius: ${RFValue(14)}px;
`;

export const Title = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const Value = styled(Text)`
  font-size: ${RFValue(18)}px;
`;
