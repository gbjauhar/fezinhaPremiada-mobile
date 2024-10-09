import React from 'react';
import {Container, Main, Title, Button} from './styles';
import {Input} from '@components/Input';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useStores} from '@hooks/root-store';
import {useNavigate} from '@hooks/useNavigate';

interface FormData {
  api_url: string;
  api_key: string;
}

const userSchema = yup.object({
  api_url: yup.string().required('Por favor, digite sua api url'),
  api_key: yup.string().required('Por favor, digite sua api key'),
});

export const ChangeUrl = () => {
  const {environmentStore} = useStores();
  const {goBack} = useNavigate();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(userSchema),
    defaultValues: {
      api_key: environmentStore?.api_key || '',
      api_url: environmentStore?.api_url || '',
    },
  });

  async function onSubmit(data: FormData) {
    await environmentStore.setEnvironment(data.api_url, data.api_key);
    goBack();
  }

  return (
    <Container>
      <Title>Variáveis ambientes</Title>

      <Main>
        <Input
          control={control}
          name="api_url"
          label="Ambiente"
          placeholder="Digite o ambiente da api"
          error={errors?.api_url?.message}
        />

        <Input
          control={control}
          name="api_key"
          label="Chave de API"
          placeholder="Digite o ambiente da api"
          error={errors?.api_url?.message}
        />

        <Button onPress={handleSubmit(onSubmit)}>Salvar</Button>
      </Main>
    </Container>
  );
};
