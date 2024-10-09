import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {Button, Container, HeaderContent, Title, WithdrawInput} from './styles';

import {useStores} from '@hooks/root-store';
import {useNavigate} from '@hooks/useNavigate';
import {ErrorText} from '@components/Input/input.styles';
import {currencyToNumber} from '@utils/currencyToNumber';
import {AlertModal, AlertModalProps} from '@components/AlertModal';

interface IFormValues {
  value: string;
}

const schema = yup.object().shape({
  value: yup
    .string()
    .required('Digite um valor acima de R$ 10,00')
    .test('valid-value', 'Digite um valor acima de R$ 10,00', value => {
      const numericValue = currencyToNumber(value);

      if (numericValue) {
        return numericValue >= 10;
      } else {
        return false;
      }
    }),
});

export const WithdrawValue = () => {
  const [modalInfo, setModalInfo] = useState<AlertModalProps>({
    visible: false,
    title: 'Solicitação realizada',
    description:
      'Você acabou de solicitar um saque com seu saldo. Em até 3 dias úteis será depositado no PIX digitado.',
    onCancel: () => {},
    buttonText: 'Ok',
    onConfirm: () => {},
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const {
    withdrawStore: {changeWithdrawValue},
    user,
  } = useStores();
  const {navigate} = useNavigate();

  const onSubmit = (data: IFormValues) => {
    const numeric = currencyToNumber(data.value);

    if (user?.value && user.value < numeric) {
      setModalInfo({
        visible: true,
        title: 'Saldo insuficiente',
        description: 'Você não possui saldo suficiente para realizar o saque.',
        onConfirm: () => navigate('Home'),
        buttonText: 'Entendi',
      });
    } else {
      changeWithdrawValue(numeric);
      navigate('WithdrawMethod');
    }
  };

  return (
    <Container>
      <HeaderContent>
        <Title>Informe abaixo o valor que você deseja sacar</Title>

        <WithdrawInput
          control={control}
          name="value"
          placeholder="R$ 0,00"
          keyboardType="numeric"
          mask={{
            type: 'money',
            unit: 'R$ ',
          }}
          onSubmitEditing={handleSubmit(onSubmit)}
          blurOnSubmit={false}
        />
        {errors.value?.message && (
          <ErrorText>{errors.value?.message}</ErrorText>
        )}
      </HeaderContent>

      <Button
        disabled={!!errors.value?.message}
        onPress={handleSubmit(onSubmit)}>
        Continuar
      </Button>

      <AlertModal {...modalInfo} />
    </Container>
  );
};
