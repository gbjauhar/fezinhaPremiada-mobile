import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {Button, Container, HeaderContent, Title} from './styles';
import {useNavigate} from '@hooks/useNavigate';
import {ErrorText} from '@components/Input/input.styles';
import {AlertModal} from '@components/AlertModal';
import {api} from '@services/api';
import {Input} from '@components/Input';
import {getErrorMessage} from '@utils/getErrorMessage';

interface IFormValues {
  distributor_code: string;
}

const schema = yup.object().shape({
  distributor_code: yup.string().required('Digite o código'),
});

export const UserLink = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: 'Vinculação feita',
    description: 'Você se vinculou a um distribuidor',
  });
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  function handleChangeModalVisibility() {
    setModalVisible(state => !state);
  }

  function onConfirmModal() {
    navigation.navigate('Home');
  }

  const onSubmit = async (data: IFormValues) => {
    setLoading(true);
    try {
      const response = await api.post<UserAPI>('distributors/vinculate', data);

      setModalInfo({
        title: 'Sucesso!',
        description: `Parabéns você foi vinculado ao vendedor, confirme os dados do vendedor abaixo: \n\nNome: ${response.data.name} \nEmail: ${response.data.email} \nCódigo: ${response.data.code}`,
      });
      handleChangeModalVisibility();
    } catch (error) {
      const message = getErrorMessage(error);

      handleChangeModalVisibility();
      setModalInfo({
        title: 'Erro ao vincular',
        description: `Erro ao se vincular, verifique se o código digitado está correto. \n\nErro: ${message}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <HeaderContent>
        <Title>
          Digite abaixo o código do distribuidor que você deseja se vincular
        </Title>

        <Input
          control={control}
          name="distributor_code"
          placeholder="Informe o código do distribuidor"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {errors.distributor_code?.message && (
          <ErrorText>{errors.distributor_code?.message}</ErrorText>
        )}
      </HeaderContent>

      <Button
        disabled={!!errors.distributor_code?.message}
        loading={loading}
        onPress={handleSubmit(onSubmit)}>
        Vincular
      </Button>

      <AlertModal
        visible={modalVisible}
        title={modalInfo.title}
        description={modalInfo.description}
        buttonText="Entendi"
        onConfirm={onConfirmModal}
        error={modalInfo.title === 'Erro ao vincular'}
      />
    </Container>
  );
};
