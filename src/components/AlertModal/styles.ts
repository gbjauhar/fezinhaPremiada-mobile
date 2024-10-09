import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {PrimaryButton} from '@components/PrimaryButton';

interface ModalStyleProps {
  error: boolean;
}

export const ConfirmButton = styled(PrimaryButton)`
  flex: 2;
`;

export const Separator = styled.View`
  flex: 0.2;
`;

export const CancelButton = styled(PrimaryButton)`
  background-color: ${({theme}) => theme.colors.grey};
  flex: 2;
`;

export const Modal = styled.Modal``;

export const Overlay = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.View`
  background: ${({theme}) => theme.colors.cardBackground};
  border-radius: ${RFValue(14)}px;
  max-width: ${RFValue(350)}px;
  width: 90%;
`;

export const Title = styled(Text).attrs({
  fontWeight: 'bold',
})<ModalStyleProps>`
  font-size: ${RFValue(19)}px;
  color: ${({theme, error}) =>
    error ? theme.colors.status.danger : theme.colors.title};
`;

export const Header = styled.View`
  padding: ${RFValue(16)}px ${RFValue(24)}px ${RFValue(24)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.cardBorder};
`;

export const Body = styled.View`
  padding: ${RFValue(16)}px ${RFValue(24)}px;
`;

export const Description = styled(Text)`
  font-size: ${RFValue(16)}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(24)}px ${RFValue(24)}px ${RFValue(14)}px;

  border-top-width: 1px;
  border-top-color: ${({theme}) => theme.colors.cardBorder};
`;
