import React, {useEffect, useState} from 'react';
import {
  ScannerContainer,
  CodeScanner,
  Modal,
  Overlay,
  Container,
  TitlesSection,
  Title,
  TitlesList,
  Name,
  ScanButton,
  ScanIcon,
  CloseButton,
  CloseIcon,
  ModalTitle,
} from './styles';
import {
  BarCodeEvent,
  BarCodeScanner,
  PermissionStatus,
} from 'expo-barcode-scanner';

interface ScanModalProps {
  scanned: boolean;
  onBarCodeScanned: (e: BarCodeEvent) => void;
  titles: Title[];
  onPressScanMore?: () => void;
  onClose?: () => void;
  visible?: boolean;
}

export const ScanModal = ({
  scanned = false,
  onBarCodeScanned,
  titles,
  onPressScanMore,
  visible = false,
  onClose,
}: ScanModalProps) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      const isPermissionGranted = status === PermissionStatus.GRANTED;
      setHasPermission(isPermissionGranted);
    };

    getBarCodeScannerPermissions();
  }, []);

  if (hasPermission === null) {
    return <Name>Requesting for camera permission</Name>;
  }
  if (hasPermission === false) {
    return <Name>No access to camera</Name>;
  }

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <Overlay>
        <Container>
          <CloseButton activeOpacity={0.6} onPress={onClose}>
            <CloseIcon />
          </CloseButton>

          <ModalTitle>Escanear código de barras</ModalTitle>

          <ScannerContainer scanned={scanned}>
            <CodeScanner
              onBarCodeScanned={scanned ? undefined : onBarCodeScanned}
            />
          </ScannerContainer>

          {titles.length > 0 && (
            <TitlesSection>
              <Title>Titulos escaneados</Title>

              <TitlesList
                data={titles}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <Name>
                    {item.name}
                    {titles.length > 1 && ','}
                  </Name>
                )}
              />
            </TitlesSection>
          )}

          {scanned && (
            <ScanButton onPress={onPressScanMore} icon={<ScanIcon />}>
              Escanear novamente
            </ScanButton>
          )}
        </Container>
      </Overlay>
    </Modal>
  );
};
