import styled from 'styled-components/native';
import {Modalize} from 'react-native-modalize';
import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(Modalize).attrs(({theme}) => ({
  modalStyle: {
    backgroundColor: theme.colors.cardBackground,
  },
}))``;

export const Header = styled.View`
  padding: ${RFValue(16)}px ${RFValue(24)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.cardBorder};
`;

export const Title = styled(Text).attrs({
  fontWeight: 'bold',
})`
  color: ${({theme}) => theme.colors.title};
`;

export const Body = styled.View`
  padding: ${RFValue(12)}px 0;
`;

export const Footer = styled.View`
  padding: ${RFValue(12)}px ${RFValue(24)}px ${RFValue(24)}px;
`;
