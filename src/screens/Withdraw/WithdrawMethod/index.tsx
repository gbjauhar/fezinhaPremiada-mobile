import React, {useState} from 'react';
import {
  Container,
  Main,
  Title,
  Description,
  OptionButton,
  Icon,
  InfoContiner,
  InfoTitle,
  InfoDescription,
} from './styles';
import {useStores} from '@hooks/root-store';
import * as yup from 'yup';
import {api} from '@services/api';
import {AlertModal} from '@components/AlertModal';
import {useNavigate} from '@hooks/useNavigate';
import {TransparentLoading} from '@components/TransparentLoading';
import {getErrorMessage} from '@utils/getErrorMessage';

export const WithdrawMethod = () => {
  const {
    user,
    setUser,
    withdrawStore: {changeWithdrawPIX, withdraw},
  } = useStores();

  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: 'Solicitação realizada',
    description:
      'Você acabou de solicitar um saque com seu saldo. Em até 3 dias úteis será depositado no PIX digitado.',
  });

  const navigation = useNavigate();

  async function handleWithdraw(pix?: string | null) {
    setLoading(true);
    try {
      if (!pix) {
        setModalInfo({
          title: 'Erro ao sacar',
          description:
            'Chave PIX selecionada não existe, verifique se seu cadastro está preenchido corretamente',
        });
        return null;
      }

      const withdrawSchema = yup.object({
        value: yup.number().required(),
        description: yup.string(),
        pix: yup.string().required(),
        payment_form: yup.string().default('PIX'),
      });

      const withdrawData = withdrawSchema.cast({
        value: withdraw?.value,
        pix: pix,
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
      changeWithdrawPIX(pix);
      setModalVisible(true);
    } catch (err) {
      const message = getErrorMessage(err);

      setModalInfo({
        title: 'Erro ao sacar',
        description: `Houve um erro ao solicitar seu saque, verifique se suas informações estão corretas e tente novamente mais tarde \n\nErro: ${message}`,
      });
      setModalVisible(true);
    } finally {
      setLoading(false);
    }
  }

  function handleGoBalance() {
    navigation.navigate('Balance');
  }

  function handleGoWithdrawPIX() {
    navigation.navigate('WithdrawPIX');
  }

  return (
    <Container>
      <Title>Escolha uma chave PIX</Title>
      <Description>
        Essa chave será utilizada para realizar o PIX em sua conta.{'\n'}
        Vale lembrar que essas chaves são as chaves de informações do seu
        cadastro.
      </Description>

      <Main>
        <OptionButton onPress={() => handleWithdraw(user?.doccument)}>
          <Icon name="address-card" />

          <InfoContiner>
            <InfoTitle>CPF</InfoTitle>
            <InfoDescription>{user?.doccument}</InfoDescription>
          </InfoContiner>
        </OptionButton>

        <OptionButton onPress={() => handleWithdraw(user?.cel)}>
          <Icon name="phone-alt" />

          <InfoContiner>
            <InfoTitle>Telefone</InfoTitle>
            <InfoDescription>{user?.cel}</InfoDescription>
          </InfoContiner>
        </OptionButton>

        <OptionButton onPress={() => handleWithdraw(user?.email)}>
          <Icon name="at" />

          <InfoContiner>
            <InfoTitle>E-mail</InfoTitle>
            <InfoDescription>{user?.email}</InfoDescription>
          </InfoContiner>
        </OptionButton>

        <OptionButton onPress={handleGoWithdrawPIX}>
          <Icon name="users" />

          <InfoContiner>
            <InfoTitle>PIX de terceiro</InfoTitle>
            <InfoDescription>
              Use uma outra chave PIX para saque
            </InfoDescription>
          </InfoContiner>
        </OptionButton>
      </Main>

      <AlertModal
        visible={modalVisible}
        title={modalInfo.title}
        description={modalInfo.description}
        buttonText="Entendi"
        onConfirm={handleGoBalance}
        error={modalInfo.title === 'Erro ao sacar'}
      />

      <TransparentLoading visible={loading} />
    </Container>
  );
};
