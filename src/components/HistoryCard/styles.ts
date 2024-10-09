import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Boleto from '../../assets/boleto.svg';
import Pix from '../../assets/pix.svg';

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;

  margin-bottom: ${RFValue(13)}px;
`;

export const Pointer = styled.View`
  width: ${RFValue(12)}px;
  height: ${RFValue(12)}px;

  margin-top: ${RFValue(6)}px;
  border-radius: ${RFValue(6)}px;

  border: 2px solid ${({theme}) => theme.colors.icons};
`;

export const InfoContainer = styled.View`
  margin-left: ${RFValue(8)}px;
`;

export const HistoryHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HistoryTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.subtitle};
  font-family: ${({theme}) => theme.fontFamily.semiBold};
  margin-bottom: ${RFValue(4)}px;
`;

export const HistoryDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.subtitle};
  font-family: ${({theme}) => theme.fontFamily.regular};
`;

export const BoletoIcon = styled(Boleto)`
  margin-right: ${RFValue(6)}px;
  bottom: 0.5%;
`;

export const PixIcon = styled(Pix)`
  margin-right: ${RFValue(6)}px;
  bottom: 0.5%;
`;
