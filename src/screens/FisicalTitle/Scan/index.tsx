import React, {useMemo, useState} from 'react';
import {BarCodeEvent} from 'expo-barcode-scanner';
import {
  Button,
  CheckIcon,
  Container,
  Main,
  OptionsContainer,
  ScanButton,
  ScanIcon,
  Title,
  styles,
} from './styles';
import {Alert} from 'react-native';
import {Input} from '@components/Input';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {api} from '@services/api';
import {TitleCard} from '../components/TitleCard';
import {TransparentLoading} from '@components/TransparentLoading';
import {getErrorMessage} from '@utils/getErrorMessage';
import {ScanModal} from '../components/ScanModal';
import {Footer} from '../components/Footer';
import {ScanMultiModal} from '../components/ScanMultiModal';

interface IFormValues {
  code: string;
}

const schema = yup.object().shape({
  code: yup.string().required('Digite o código de barras'),
});

export const TitleScan = () => {
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scannedTitles, setScannedTitles] = useState<Title[]>([]);
  const [scannedTitlesRange, setScannedTitlesRange] = useState<string[]>([]);
  const [showScan, setShowScan] = useState(false);
  const [showMultiScan, setShowMultiScan] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });
  async function getTitleFromCode(code: string) {
    setLoading(true);

    try {
      const response = await api.get<Title>(`fisical-titles/code/${code}`);
      Alert.alert(
        'Código escaneado!',
        `O código ${code} foi escaneado com sucesso, agora só confirmar na lista abaixo de títulos escaneados.`,
      );

      const alreadyHasTitle = scannedTitles.find(
        title => title.id === response.data.id,
      );

      if (!alreadyHasTitle) {
        setScannedTitles(state => [...state, response.data]);
      }

      setShowScan(false);
      setScanned(false);

      return response.data;
    } catch (err) {
      const message = getErrorMessage(err);

      Alert.alert(
        'Erro ao buscar código',
        `Código ${code} não foi encontrado, tente escanea-lo novamente. \n\n${message}`,
      );
    } finally {
      setLoading(false);
    }
  }

  async function getTitlesByRange(start_code: string, end_code: string) {
    setLoading(true);

    try {
      const response = await api.get<Title[]>(
        `fisical-titles/many-code?start_code=${start_code}&end_code=${end_code}`,
      );
      Alert.alert(
        'Código escaneado!',
        `Os códigos foram escaneados com sucesso, agora só confirmar na lista abaixo de ${response.data.length} títulos escaneados.`,
      );

      const notIncludedFilters = response.data.filter(
        title => !scannedTitles.includes(title),
      );

      setScannedTitles(state => [...state, ...notIncludedFilters]);

      setShowMultiScan(false);
      setScanned(false);
      setScannedTitlesRange([]);

      return response.data;
    } catch (err) {
      const message = getErrorMessage(err);

      Alert.alert(
        'Erro ao buscar código',
        `Códigos não foram encontrados, tente escanea-lo novamente. \n\n${message}`,
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteItem(id: string) {
    setScannedTitles(state => state.filter(title => title.id !== id));
  }

  function onSubmit(data: IFormValues) {
    getTitleFromCode(data.code);
  }

  const handleBarCodeScanned = async (e: BarCodeEvent) => {
    setScanned(true);

    return await getTitleFromCode(e.data);
  };

  const handleBarCodeScannedRange = async (e: BarCodeEvent) => {
    setScanned(true);

    if (scannedTitlesRange.length < 2) {
      if (scannedTitlesRange.length === 1) {
        getTitlesByRange(scannedTitlesRange[0], scannedTitlesRange[1]);
      }

      return setScannedTitlesRange(state => [...state, e.data]);
    }

    return await getTitlesByRange(scannedTitlesRange[0], scannedTitlesRange[1]);
  };

  const totalTitleValues = useMemo(() => {
    if (scannedTitles.length === 0) {
      return 0;
    }

    return scannedTitles.reduce((acc, title) => {
      return acc + title.value;
    }, 0);
  }, [scannedTitles]);

  return (
    <>
      <Container>
        <OptionsContainer>
          <ScanButton icon={<ScanIcon />} onPress={() => setShowScan(true)}>
            Escaneamento Unitário
          </ScanButton>

          <ScanButton
            icon={<ScanIcon />}
            onPress={() => setShowMultiScan(true)}>
            Escaneamento Sequencial
          </ScanButton>
        </OptionsContainer>

        <Input
          label="Código de barras"
          placeholder="Dados do código de barras"
          control={control}
          name="code"
          error={errors.code?.message}
          style={styles.input}
        />

        <Button onPress={handleSubmit(onSubmit)} icon={<CheckIcon />}>
          Escolher
        </Button>

        <ScanModal
          titles={scannedTitles}
          scanned={scanned}
          onBarCodeScanned={handleBarCodeScanned}
          onPressScanMore={() => setScanned(false)}
          visible={showScan}
          onClose={() => setShowScan(false)}
        />
        <ScanMultiModal
          titles={scannedTitlesRange}
          scanned={scanned}
          onBarCodeScanned={handleBarCodeScannedRange}
          onPressScanMore={() => setScanned(false)}
          visible={showMultiScan}
          onClose={() => setShowMultiScan(false)}
        />

        <Title>{scannedTitles.length} Títulos escaneados</Title>
        <Main
          data={scannedTitles}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TitleCard
              key={item.id}
              name={item.name}
              code={item.bar_code}
              onDelete={() => handleDeleteItem(item.id)}
            />
          )}
        />

        <TransparentLoading visible={loading} />
      </Container>

      <Footer total={totalTitleValues} onConfirm={() => {}} />
    </>
  );
};
