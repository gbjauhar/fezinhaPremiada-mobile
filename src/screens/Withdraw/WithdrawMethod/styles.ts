import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 32,
  },
})`
  padding: 0 ${RFValue(24)}px;
`;

export const Title = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const Description = styled(Text)`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.subtitle};
`;

export const Main = styled.View`
  margin-top: ${RFValue(24)}px;
  gap: ${RFValue(16)}px;
`;

export const OptionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: ${RFValue(16)}px;
  background-color: ${({theme}) => theme.colors.cardBackground};
  border-radius: ${RFValue(14)}px;
  border: 1px solid ${({theme}) => theme.colors.cardBorder};

  flex-direction: row;
  align-items: center;
  gap: ${RFValue(12)}px;
`;

export const Icon = styled(FontAwesome5)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.icons};
`;

export const InfoContiner = styled.View``;

export const InfoTitle = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const InfoDescription = styled(Text)`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.icons};
`;
