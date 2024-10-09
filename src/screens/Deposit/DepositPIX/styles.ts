import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {ShareButton} from '@components/ShareButton';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  font-size: ${RFValue(20)}px;
  padding: 0 ${RFValue(24)}px;
`;

export const QRCode = styled.Image`
  margin: 0 auto;

  width: 50%;
  aspect-ratio: 4 / 4;

  background-color: white;
  border-radius: ${RFValue(8)}px;
`;

export const Footer = styled.View`
  padding: ${RFValue(24)}px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.cardBackground};
`;

export const Share = styled(ShareButton)``;
