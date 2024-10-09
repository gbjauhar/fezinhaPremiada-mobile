import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {Button, Container, HeaderContent, Title, WithdrawInput} from './styles';
import {useNavigate} from '@hooks/useNavigate';
import {ErrorText} from '@components/Input/input.styles';
import {currencyToNumber} from '@utils/currencyToNumber';

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

export const DepositValue = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const {navigate} = useNavigate();

  const onSubmit = (data: IFormValues) => {
    const numeric = currencyToNumber(data.value);

    navigate('DepositPIX', {value: numeric});
  };

  return (
    <Container>
      <HeaderContent>
        <Title>Informe abaixo o valor que você deseja depositar</Title>

        <WithdrawInput
          control={control}
          label="Valor"
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
    </Container>
  );
};
