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
  onBarCodeScanned: (e: BarCodeEvent) => Promise<Title[] | void>;
  titles: string[];
  onPressScanMore?: () => void;
  onClose?: () => void;
  visible?: boolean;
}

export const ScanMultiModal = ({
  scanned = false,
  onBarCodeScanned,
  titles,
  onPressScanMore,
  visible = false,
  onClose,
}: ScanModalProps) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [step, setStep] = useState(1);

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

  async function handleScanMore(e: BarCodeEvent) {
    const title = await onBarCodeScanned(e);

    if (title?.id) {
      setStep(2);
    }
  }

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <Overlay>
        <Container>
          <CloseButton activeOpacity={0.6} onPress={onClose}>
            <CloseIcon />
          </CloseButton>

          <ModalTitle>
            {step === 1
              ? 'Escaneie o primeiro titulo'
              : 'Escaneie o segundo titulo'}
          </ModalTitle>

          <ScannerContainer scanned={scanned}>
            <CodeScanner
              onBarCodeScanned={scanned ? undefined : handleScanMore}
            />
          </ScannerContainer>

          {titles.length > 0 && (
            <TitlesSection>
              <Title>
                {titles.length > 0 && titles.length} Titulos escaneados
              </Title>

              <TitlesList
                data={titles}
                keyExtractor={item => item}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <Name>
                    {item}
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
