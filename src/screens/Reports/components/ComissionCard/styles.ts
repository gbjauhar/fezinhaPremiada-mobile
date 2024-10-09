import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.cardBackground};
  border: 2px solid ${({theme}) => theme.colors.cardBorder};
  border-radius: ${RFValue(14)}px;
  margin: ${RFValue(8)}px ${RFValue(16)}px;

  padding: ${RFValue(10)}px ${RFValue(16)}px ${RFValue(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.View``;

export const Title = styled(Text).attrs({
  fontWeight: 'semiBold',
})`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.title};

  width: 75%;
`;

export const Description = styled(Text)`
  font-size: ${RFValue(14)}px;
`;

export const Value = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.icons};

  margin-top: ${RFValue(8)}px;
`;

export const DateText = styled(Text).attrs({
  fontWeight: 'semiBold',
})`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.subtitle};

  position: absolute;
  right: 0;
  top: 0;
`;
