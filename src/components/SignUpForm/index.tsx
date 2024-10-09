import React, {useState} from 'react';
import {TextInput, Text, View, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {styles} from './styles';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {TextInputMask} from 'react-native-masked-text';
import {postSignUp} from '@services/auth';
import {useNavigate} from '@hooks/useNavigate';
import {formatValue, testCPF, testCNPJ} from '@services/cpfValues';
import theme from '@theme';
import {PrimaryButton} from '@components/PrimaryButton';

type FormData = {
  name: string;
  doccument: string;
  email: string;
  cel: string;
  password: string;
  password_: string;
};

const userSchema = yup.object({
  name: yup.string().min(4, 'Nome muito curto').required(),
  doccument: yup
    .string()
    .test('valid-cpf-cnpj', 'CPF ou CNPJ inválido', value => {
      if (value?.length === 14) {
        return testCPF(value);
      } else {
        return testCNPJ(value);
      }
    }),
  email: yup
    .string()
    .matches(/^\S+@\S+$/i, 'Formato de e-mail inválido')
    .required(),
  cel: yup
    .string()
    .matches(
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
      'Formato de telefone inválido',
    )
    .required(),
  password: yup.string().min(6, 'Sua senha é muito curta').required(),
  password_: yup
    .string()
    .required('Por favor, digite novamente sua senha')
    .oneOf([yup.ref('password')], 'Senhas não são iguais'),
});

const Form = () => {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (form: FormData) => {
    setLoading(true);
    await postSignUp(form).then(res => {
      if (res.success) {
        Alert.alert(
          'Cadastro feito com sucesso',
          'Seu cadastro foi realizado com sucesso, agora basta utilizar seu CPF/CNPJ e senha para entrar.',
        );
        navigation.navigate('SignIn');
      } else {
        Alert.alert(
          'Houve um erro ao cadastrar',
          'Verifique se seus dados estão corretos e tente novamente',
        );
      }
      setLoading(false);
    });
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Seu nome"
            textContentType="name"
            placeholderTextColor={theme.colors.grey}
          />
        )}
        name="name"
        defaultValue=""
      />
      <Text style={styles.required}>{errors.name?.message}</Text>

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={text => onChange(formatValue(text))}
            value={value}
            placeholder="CPF ou CNPJ"
            placeholderTextColor={theme.colors.grey}
          />
        )}
        name="doccument"
        defaultValue=""
      />
      <Text style={styles.required}>{errors.doccument?.message}</Text>

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Seu e-mail"
            textContentType="emailAddress"
            autoCapitalize="none"
            placeholderTextColor={theme.colors.grey}
          />
        )}
        name="email"
        defaultValue=""
      />
      <Text style={styles.required}>{errors.email?.message}</Text>

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInputMask
            type={'cel-phone'}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Seu telefone"
            textContentType="telephoneNumber"
            placeholderTextColor={theme.colors.grey}
          />
        )}
        name="cel"
        defaultValue=""
      />
      <Text style={styles.required}>{errors.cel?.message}</Text>

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Crie uma senha"
            textContentType="password"
            secureTextEntry={true}
            placeholderTextColor={theme.colors.grey}
          />
        )}
        name="password"
        defaultValue=""
      />
      <Text style={styles.required}>{errors.password?.message}</Text>

      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Confirme sua senha"
            textContentType="password"
            secureTextEntry={true}
            placeholderTextColor={theme.colors.grey}
          />
        )}
        name="password_"
        defaultValue=""
      />
      <Text style={styles.required}>{errors.password_?.message}</Text>

      <PrimaryButton
        loading={loading}
        disabled={loading}
        onPress={handleSubmit(onSubmit)}>
        Criar conta
      </PrimaryButton>

      <Text style={styles.text}>
        Já tem uma conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
          {' '}
          Fazer login
        </Text>
      </Text>
    </View>
  );
};

export default Form;
