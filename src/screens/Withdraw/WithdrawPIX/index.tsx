import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {Button, Container, HeaderContent, Title, WithdrawInput} from './styles';
import {useStores} from '@hooks/root-store';
import {useNavigate} from '@hooks/useNavigate';
import {ErrorText} from '@components/Input/input.styles';
import {AlertModal} from '@components/AlertModal';
import {api} from '@services/api';

interface IFormValues {
  pix: string;
}

const schema = yup.object().shape({
  pix: yup.string().required('Digite sua chave PIX'),
});

export const WithdrawPIX = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: 'Solicitação realizada',
    description:
      'Você acabou de solicitar um saque com seu saldo. Em até 3 dias úteis será depositado no PIX digitado.',
  });
  const [loading, setLoading] = useState(false);

  const {
    withdrawStore: {changeWithdrawPIX, withdraw},
    setUser,
  } = useStores();

  const {reset} = useNavigate();

  const onSubmit = async (data: IFormValues) => {
    setLoading(true);
    try {
      const withdrawSchema = yup.object({
        value: yup.number().required(),
        description: yup.string(),
        pix: yup.string().required(),
        payment_form: yup.string().default('PIX'),
      });

      const withdrawData = withdrawSchema.cast({
        value: withdraw?.value,
        pix: data.pix,
        description: `Solicitação de saque no valor de ${withdraw?.value}`,
      });

      await api.post('withdraw', withdrawData);
      const response = await api.get<UserAPI>('profile');

      setUser({
        cel: response.data.cel,
        credit: response.data.credit,
        doccument: response.data.doccument,
        email: response.data.email,
        id: response.data.id,
        name: response.data.name,
        created_at: response.data.created_at.toString(),
        updated_at: response.data.updated_at.toString(),
        value: response.data.value,
        code: response.data.code,
        credit_limit: response.data.credit_limit,
        associated_to: response.data.associated_to,
      });
      changeWithdrawPIX(data.pix);
      setModalVisible(true);
    } catch (err) {
      setModalInfo({
        title: 'Erro ao sacar',
        description:
          'Houve um erro ao solicitar seu saque, verifique se suas informações estão corretas e tente novamente mais tarde',
      });
      setModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  function handleGoBalance() {
    reset({
      index: 1,
      routes: [
        {name: 'Home'},
        {
          name: 'Balance',
        },
      ],
    });
  }

  return (
    <Container>
      <HeaderContent>
        <Title>
          Digite abaixo a chave PIX em que você deseja receber seu saque
        </Title>

        <WithdrawInput
          control={control}
          name="pix"
          placeholder="Informe o PIX"
          onSubmitEditing={handleSubmit(onSubmit)}
          autoCapitalize="none"
          autoCorrect={false}
          blurOnSubmit={false}
        />
        {errors.pix?.message && <ErrorText>{errors.pix?.message}</ErrorText>}
      </HeaderContent>

      <Button
        disabled={!!errors.pix?.message}
        onPress={handleSubmit(onSubmit)}
        loading={loading}>
        Solicitar
      </Button>

      <AlertModal
        visible={modalVisible}
        title={modalInfo.title}
        description={modalInfo.description}
        buttonText="Entendi"
        onConfirm={handleGoBalance}
        error={modalInfo.title === 'Erro ao sacar'}
      />
    </Container>
  );
};
