import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryButton } from '@components/PrimaryButton';
import { Container, styles } from './styles';
import { Input } from '@components/Input';
import { ErrorText } from '@components/Input/input.styles';
import { api } from '@services/api';
import { getErrorMessage } from '@utils/getErrorMessage';
import { AlertModal, IAlertModalInfo } from '@components/AlertModal';
import { useNavigate } from '@hooks/useNavigate';

type FormData = {
  oldPassword: string;
  newPassword: string;
  newPassword_: string;
};

const userSchema = yup.object({
  oldPassword: yup.string().required('Digite sua senha'),
  newPassword: yup
    .string()
    .min(6, 'Sua senha é muito curta')
    .required('Digite a nova senha'),
  newPassword_: yup
    .string()
    .required('Por favor, digite novamente sua senha')
    .oneOf([yup.ref('newPassword')], 'Senhas não são iguais'),
});

export const UpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState<IAlertModalInfo>({
    visible: false,
    title: 'Senha alterada!',
    description:
      'Sua senha foi alterada com sucesso! \nNão se esqueça de utiliza-la na próxima vez que entrar.',
    buttonText: 'Sim',
    onConfirm: () => { },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(userSchema),
  });

  const { navigate } = useNavigate();

  const onSubmit = async (form: FormData) => {
    setLoading(true);
    try {
      await api.patch('users/change-password', {
        old_password: form.oldPassword,
        new_password: form.newPassword,
      });

      setModalInfo(state => ({
        ...state,
        visible: true,
        onConfirm: () => navigate('Home'),
      }));
    } catch (err) {
      const message = getErrorMessage(err);

      setModalInfo(state => ({
        ...state,
        visible: true,
        title: 'Erro ao alterar senha',
        description: `Houve um erro ao alterar sua senha, verifique se sua senha atual que digitou está correta. \n\nErro: ${message}`,
        onConfirm: () => navigate('Home'),
        error: true,
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Input
        control={control}
        label="Senha atual"
        name="oldPassword"
        placeholder="Senha atual"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        secureTextEntry
        style={styles.input}
      />
      {errors.oldPassword?.message && (
        <ErrorText>{errors.oldPassword?.message}</ErrorText>
      )}

      <Input
        control={control}
        label="Nova senha"
        name="newPassword"
        placeholder="Digite a nova senha"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        secureTextEntry
        style={styles.input}
      />
      {errors.newPassword?.message && (
        <ErrorText>{errors.newPassword?.message}</ErrorText>
      )}

      <Input
        control={control}
        label="Repita a nova senha"
        name="newPassword_"
        placeholder="Confirme a nova senha"
        onSubmitEditing={handleSubmit(onSubmit)}
        blurOnSubmit={false}
        secureTextEntry
        style={styles.input}
      />
      {errors.newPassword_?.message && (
        <ErrorText>{errors.newPassword_?.message}</ErrorText>
      )}

      <PrimaryButton
        style={styles.button}
        loading={loading}
        disabled={loading}
        onPress={handleSubmit(onSubmit)}>
        Salvar{' '}
      </PrimaryButton>

      <AlertModal {...modalInfo} />
    </Container>
  );
};
