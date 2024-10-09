import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getProfile, postUpdate } from '@services/auth';
import { PrimaryButton } from '@components/PrimaryButton';
import { Container, styles } from './styles';
import { Input } from '@components/Input';
import { ErrorText } from '@components/Input/input.styles';
import { checkCEP } from '@services/cepAPI';

type FormData = {
  address: string;
  neighborhood: string;
  cep: string;
  uf: string;
  residence_number: string;
  city: string;
};

const addressSchema = yup.object({
  address: yup.string().required('Digite seu endereço'),
  neighborhood: yup.string().required('Digite seu bairro'),
  cep: yup
    .string()
    .test('validCEP', 'CEP inválido', value => {
      if (value) {
        const res = checkCEP(value);
        return res;
      }

      return false;
    })
    .required('Digite seu CEP'),
  uf: yup.string().required('Digite seu estado'),
  residence_number: yup.string().required('Digite o número da residência'),
  city: yup.string().required('Digite sua cidade'),
});

interface AddressState {
  address: string;
  cep: string;
  city: string;
  neighborhood: string;
  residence_number: string;
  uf: string;
}

export const Address = () => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState<AddressState | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(addressSchema),
  });

  useEffect(() => {
    getProfile()
      .then(res => {
        if (res.data.address) {
          setAddress({
            address: res.data.address,
            cep: res.data.cep,
            city: res.data.city,
            neighborhood: res.data.neighborhood,
            residence_number: res.data.residence_number,
            uf: res.data.uf,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const onSubmit = async (form: FormData) => {
    setLoading(true);
    await postUpdate(form).then(res => {
      if (res.success) {
        Alert.alert('Endereço cadastrado com sucesso');
      } else {
        Alert.alert(
          'Houve um erro ao cadastrar o endereço',
          'Verifique se seus dados estão corretos e tente novamente',
        );
      }
      setLoading(false);
    });
  };

  return (
    <Container>
      <Input
        control={control}
        label="Endereço"
        name="address"
        placeholder="Endereço"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        defaultValue={!address ? '' : address.address}
        style={styles.input}
      />
      {errors.address?.message && (
        <ErrorText>{errors.address?.message}</ErrorText>
      )}

      <Input
        control={control}
        label="Bairro"
        name="neighborhood"
        placeholder="Bairro"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        defaultValue={!address ? '' : address.neighborhood}
        style={styles.input}
      />
      {errors.neighborhood?.message && (
        <ErrorText>{errors.neighborhood?.message}</ErrorText>
      )}

      <Input
        mask={{ type: 'zip-code' }}
        control={control}
        label="CEP"
        name="cep"
        placeholder="CEP"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        style={styles.input}
      />
      {errors.cep?.message && <ErrorText>{errors.cep?.message}</ErrorText>}
      <Input
        control={control}
        label="UF"
        name="uf"
        placeholder="UF"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        maxLength={2}
        defaultValue={!address ? '' : address.uf}
        style={styles.input}
      />
      {errors.uf?.message && <ErrorText>{errors.uf?.message}</ErrorText>}

      <Input
        control={control}
        label="Número"
        name="residence_number"
        placeholder="Número da residência"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        defaultValue={!address ? '' : address.residence_number}
        style={styles.input}
      />
      {errors.residence_number?.message && (
        <ErrorText>{errors.residence_number?.message}</ErrorText>
      )}
      <Input
        control={control}
        label="Cidade"
        name="city"
        placeholder="Cidade"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        defaultValue={!address ? '' : address.city}
        style={styles.input}
      />

      {errors.city?.message && <ErrorText>{errors.city?.message}</ErrorText>}
      <PrimaryButton
        style={styles.button}
        loading={loading}
        disabled={loading}
        onPress={handleSubmit(onSubmit)}>
        Salvar{' '}
      </PrimaryButton>
    </Container>
  );
};
