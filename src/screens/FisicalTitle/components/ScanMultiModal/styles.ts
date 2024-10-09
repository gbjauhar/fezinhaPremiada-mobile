import styled from 'styled-components/native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import {RFValue} from 'react-native-responsive-fontsize';
import {FlatList} from 'react-native';
import {Text} from '@components/Text';
import {PrimaryButton} from '@components/PrimaryButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

interface ScannerInfoProps {
  scanned: boolean;
}

export const Modal = styled.Modal``;

export const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${RFValue(24)}px;

  background-color: rgba(0, 0, 0, 0.8);
`;

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.cardBackground};
  padding: ${RFValue(16)}px;

  border-radius: ${RFValue(14)}px;
  border: 1px solid ${({theme}) => theme.colors.cardBorder};

  width: 100%;
`;

export const ModalTitle = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.title};

  margin-top: ${RFValue(8)}px;
`;

export const CodeScanner = styled(BarCodeScanner)`
  width: 100%;
  aspect-ratio: 9 / 16;
`;

export const ScannerContainer = styled.View<ScannerInfoProps>`
  width: 100%;
  height: ${RFValue(200)}px;

  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(8)}px;

  overflow: hidden;

  border-radius: ${RFValue(14)}px;
  border: 2px solid
    ${({theme, scanned}) =>
      scanned ? theme.colors.icons : theme.colors.status.danger};
`;

export const TitlesSection = styled.View`
  margin-top: 10px;
`;

export const Title = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const Name = styled(Text)`
  margin-right: ${RFValue(4)}px;
  font-size: ${RFValue(14)}px;
`;

export const TitlesList = styled.FlatList`` as unknown as typeof FlatList;

export const ScanButton = styled(PrimaryButton).attrs(({theme}) => ({
  textProps: {
    fontWeight: 'regular',
    style: {
      color: theme.colors.icons,
      fontSize: RFValue(16),
    },
  },
}))`
  background-color: ${({theme}) => theme.colors.cardBackground};
  border: 1px solid ${({theme}) => theme.colors.icons};

  padding: ${RFValue(10)}px;

  margin-top: ${RFValue(16)}px;
`;

export const ScanIcon = styled(Ionicons).attrs({
  name: 'scan-circle-outline',
})`
  color: ${({theme}) => theme.colors.icons};
  font-size: ${RFValue(20)}px;
  margin-right: ${RFValue(4)}px;
  top: ${RFValue(1)}px;
`;

export const CloseIcon = styled(Feather).attrs({
  name: 'x-circle',
})`
  color: ${({theme}) => theme.colors.status.danger};
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(4)}px;
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: transparent;

  align-self: flex-end;
  margin-bottom: ${RFValue(16)}px;
  padding: 0 ${RFValue(16)}px;

  position: absolute;
  top: ${RFValue(14)}px;
  z-index: 10;
`;
