import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(12)}px;
  border-radius: ${RFValue(8)}px;
  background-color: ${({theme}) => theme.colors.cardBackground};
  border: 1px solid ${({theme}) => theme.colors.cardBorder};

  margin: 0 ${RFValue(4)}px 0 0;
  gap: ${RFValue(12)}px;
`;

export const Title = styled(Text).attrs({
  fontWeight: 'bold',
})`
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(11)}px;
`;

export const CloseButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: ${RFValue(8)}px;
  border: 1px solid ${({theme}) => theme.colors.status.danger};
  border-radius: ${RFValue(34)}px;
`;

export const CloseIcon = styled(Feather).attrs({
  name: 'x-circle',
})`
  color: ${({theme}) => theme.colors.status.danger};
  font-size: ${RFValue(14)}px;
`;
