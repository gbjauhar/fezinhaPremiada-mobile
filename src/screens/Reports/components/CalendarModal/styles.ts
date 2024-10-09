import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  background-color: ${({theme}) => theme.colors.cardBackground};
  border: 1px solid ${({theme}) => theme.colors.cardBorder};
  padding: ${RFValue(16)}px;
  border-radius: ${RFValue(14)}px;
  width: 95%;
`;

export const Title = styled(Text).attrs({
  fontWeight: 'semiBold',
})`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.icons};
  text-align: center;
`;
