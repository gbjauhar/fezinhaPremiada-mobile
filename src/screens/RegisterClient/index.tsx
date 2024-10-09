import React, {useState} from 'react';
import {Alert, TextInput} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {Container, styles} from './styles';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {postRegister} from '@services/auth';
import {useNavigate} from '@hooks/useNavigate';
import {testCNPJ, testCPF} from '@services/cpfValues';
import {PrimaryButton} from '@components/PrimaryButton';
import {checkCEP} from '@services/cepAPI';
import {Input} from '@components/Input';
import {ErrorText} from '@components/Input/input.styles';
import {getErrorMessage} from '@utils/getErrorMessage';
import {useStores} from '@hooks/root-store';
import {useRoute} from '@react-navigation/native';
import {TextInputMask} from 'react-native-masked-text';
import theme from '@theme';

type FormData = {
  name: string;
  doccument: string;
  email: string;
  cel: string;
  address: string;
  neighborhood: string;
  cep: string;
  uf: string;
  residence_number: string;
  city: string;
};

const userSchema = yup.object({
  name: yup.string().min(4, 'Nome muito curto').required('Digite o nome'),
  email: yup
    .string()
    .matches(/^\S+@\S+$/i, 'Formato de e-mail inválido')
    .required('Digite o email'),
  doccument: yup
    .string()
    .test('valid-cpf-cnpj', 'CPF ou CNPJ inválido', value => {
      if (value?.length === 14) {
        return testCPF(value);
      } else {
        return testCNPJ(value);
      }
    })
    .required('Digite o CPF'),
  cep: yup
    .string()
    .test('validCEP', 'CEP inválido', async value => {
      if (value) {
        const res = await checkCEP(value);
        return res.success;
      }

      return false;
    })
    .required('Digite o CEP'),
  cel: yup
    .string()
    .matches(
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
      'Formato de telefone inválido',
    )
    .required('Digite o telefone'),
  address: yup.string(),
  neighborhood: yup.string(),
  uf: yup.string(),
  residence_number: yup.string(),
  city: yup.string(),
});

const RegisterClient = () => {
  const navigation = useNavigate();
  const {payment} = useStores();
  const [editable, setEditable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({
    address: '',
    neighborhood: '',
    city: '',
    uf: '',
  });
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (form: FormData) => {
    const body = {...address, ...form, invited: true};
    setLoading(true);
    await postRegister(body).then(res => {
      if (res.success) {
        Alert.alert(
          'Cadastro feito com sucesso',
          'O cadastro foi realizado com sucesso, o cliente receberá a senha por email e SMS',
        );

        if (payment === 'PIX') {
          navigation.navigate('QrCode');
        } else {
          navigation.goBack();
        }
      } else {
        const message = getErrorMessage(res.data);
        Alert.alert('Houve um erro ao cadastrar', message);
      }
      setLoading(false);
    });
  };

  const handleCEP = async data => {
    await checkCEP(data).then(res => {
      if (res.success) {
        setAddress({
          neighborhood: res.data.bairro,
          city: res.data.localidade,
          address: res.data.logradouro,
          uf: res.data.uf,
        });
        setEditable(true);
      }
    });
  };

  return (
    <Container>
      <Input
        control={control}
        name="name"
        placeholder="Nome do cliente"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        defaultValue=""
        style={styles.input}
      />
      {errors.name?.message && <ErrorText>{errors.name?.message}</ErrorText>}

      <Input
        control={control}
        name="email"
        placeholder="Email do cliente"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        defaultValue=""
        style={styles.input}
      />
      {errors.email?.message && <ErrorText>{errors.email?.message}</ErrorText>}

      <Input
        control={control}
        name="doccument"
        placeholder="CPF do cliente"
        mask={{type: 'cpf'}}
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        defaultValue=""
        style={styles.input}
      />
      {errors.doccument?.message && (
        <ErrorText>{errors.doccument?.message}</ErrorText>
      )}

      <Input
        mask={{ type: 'cel-phone' }}
        control={control}
        name="cel"
        placeholder="Telefone do cliente"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        defaultValue=""
        style={styles.input}
      />
      {errors.cel?.message && <ErrorText>{errors.cel?.message}</ErrorText>}
      
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInputMask
            style={styles.wholeInput}
            onBlur={() => handleCEP(value)}
            onSubmitEditing={handleSubmit(onSubmit)}
            onChangeText={onChange}
            value={value}
            placeholder="CEP do cliente"
            type="zip-code"
            placeholderTextColor={theme.colors.titleDark}
          />
        )}
        name="cep"
        defaultValue=""
      />
      {errors.cep?.message && <ErrorText>{errors.cep?.message}</ErrorText>}

      <Input
        control={control}
        name="address"
        placeholder="Endereço"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        defaultValue={address.address}
        style={styles.input}
        editable={editable}
      />
      {errors.address?.message && (
        <ErrorText>{errors.address?.message}</ErrorText>
      )}

      <Input
        control={control}
        name="neighborhood"
        placeholder="Bairro"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        defaultValue={address.neighborhood}
        style={styles.input}
        editable={editable}
      />
      {errors.neighborhood?.message && (
        <ErrorText>{errors.neighborhood?.message}</ErrorText>
      )}

      <Input
        control={control}
        name="uf"
        placeholder="UF"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        maxLength={2}
        defaultValue={address.uf}
        style={styles.input}
        editable={editable}
      />
      {errors.uf?.message && <ErrorText>{errors.uf?.message}</ErrorText>}

      <Input
        control={control}
        name="residence_number"
        placeholder="Número da residência"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        defaultValue=""
        style={styles.input}
        editable={editable}
      />
      {errors.residence_number?.message && (
        <ErrorText>{errors.residence_number?.message}</ErrorText>
      )}
      <Input
        control={control}
        name="city"
        placeholder="Cidade"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        defaultValue={address.city}
        style={styles.input}
        editable={editable}
      />

      {errors.city?.message && <ErrorText>{errors.city?.message}</ErrorText>}

      <PrimaryButton
        style={styles.button}
        loading={loading}
        disabled={loading}
        onPress={handleSubmit(onSubmit)}>
        Registrar cliente
      </PrimaryButton>
    </Container>
  );
};

export default RegisterClient;
