import React, {useState} from 'react';
import {TextInput, Text, View, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {styles} from './styles';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {postSignIn} from '@services/auth';
import {useNavigate} from '@hooks/useNavigate';
import {formatValue, testCNPJ, testCPF} from '@services/cpfValues';
import {database} from '../../database/index.native';
import {addHours} from 'date-fns';
import {useStores} from '@hooks/root-store';
import theme from '@theme';
import {PrimaryButton} from '@components/PrimaryButton';

type FormData = {
  doccument: string;
  password: string;
};

const userSchema = yup.object({
  doccument: yup
    .string()
    .test('valid-cpf-cnpj', 'CPF ou CNPJ inválido', value => {
      if (value?.length === 14) {
        return testCPF(value);
      } else {
        return testCNPJ(value);
      }
    }),
  password: yup.string().required('Por favor, digite sua senha'),
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

  const {setUser, setToken} = useStores();

  const onSubmit = async (form: FormData) => {
    setLoading(true);
    await postSignIn(form)
      .then(res => {
        console.log({res});
        if (res.success) {
          console.log(res.data);
          database.adapter.setLocal('user_id', res.data.token);
          database.adapter.setLocal(
            'expiresIn',
            JSON.stringify(addHours(new Date(), 18)),
          );
          database.adapter.setLocal('user', JSON.stringify(res.data.user));

          setUser({
            cel: res.data.user.cel,
            email: res.data.user.email,
            id: res.data.user.id,
            name: res.data.user.name,
            doccument: res.data.user.cpf,
            credit: res.data.user.credit,
            credit_limit: res.data.user.credit_limit,
            value: res.data.user.value,
            code: res.data.user.code,
            created_at: res.data.user.created_at,
            updated_at: res.data.user.updated_at,
            associated_to: res.data.user.associated_to,
          });
          setToken(res.data.token);
        } else {
          Alert.alert(
            'Houve um erro ao fazer o login',
            'Verifique se seus dados estão corretos e tente novamente',
          );
        }
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
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
            placeholder="Informe sua senha"
            textContentType="password"
            secureTextEntry={true}
            placeholderTextColor={theme.colors.grey}
          />
        )}
        name="password"
        defaultValue=""
      />
      <Text style={styles.required}>{errors.password?.message}</Text>

      <PrimaryButton
        loading={loading}
        disabled={loading}
        onPress={handleSubmit(onSubmit)}>
        Acessar{' '}
      </PrimaryButton>

      <Text style={styles.text}>
        Ainda não tem conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          {' '}
          Cadastrar agora
        </Text>
      </Text>
      <Text style={styles.conditions}>
        Termos de Uso e Política de Privacidade
      </Text>
    </View>
  );
};

export default Form;
