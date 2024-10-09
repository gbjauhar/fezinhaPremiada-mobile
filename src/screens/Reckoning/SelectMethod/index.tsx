import React, {useState} from 'react';
import {
  Container,
  Title,
  Description,
  Value,
  Main,
  Card,
  CardInfo,
  MoneyIcon,
  DescriptionContainer,
  CardTitle,
  CardDescription,
  ArrowRight,
  PixIcon,
} from './styles';
import {AlertModal, AlertModalProps} from '@components/AlertModal';
import {useNavigate} from '@hooks/useNavigate';
import {api} from '@services/api';
import {useStores} from '@hooks/root-store';
import {formatValue} from '@utils/formatValue';
import {TransparentLoading} from '@components/TransparentLoading';

const options = [
  {
    title: 'Em dinheiro',
    description: 'Com seu saldo',
    icon: <MoneyIcon />,
  },
  {
    title: 'Pix',
    description: 'Acertar com PIX',
    icon: <PixIcon />,
  },
];

export const SelectMethod = () => {
  const [showBalanceModal, setShowBalanceModal] = useState<AlertModalProps>({
    visible: false,
    animationType: 'fade',
    title: 'Acertar crédito',
    description: `Ao acertar com seu saldo, o valor a pagar será descontado do seu saldo atual. ${'\n'}Tem certeza disso?`,
    buttonText: 'Sim',
    cancelText: 'Não',
    onConfirm: handleRockoningAPI,
    onCancel: handleShowBalanceModal,
  });
  const {navigate} = useNavigate();
  const {handleRockoning, user} = useStores();
  const [loading, setLoading] = useState(false);

  const valueToPay = Number(user?.credit_limit) - Number(user?.credit) || 0;

  function handleShowBalanceModal() {
    setShowBalanceModal(state => ({
      ...state,
      visible: !state.visible,
    }));
  }

  async function handleRockoningAPI() {
    setLoading(true);
    setShowBalanceModal(state => ({
      ...state,
      visible: false,
    }));

    try {
      if (user?.credit && user?.credit_limit && user?.value) {
        if (valueToPay <= 0) {
          return setShowBalanceModal(state => ({
            ...state,
            visible: true,
            title: 'Crédito cheio',
            description: `Seu crédito já está no máximo, para você realizar o acerto de contas é preciso que você utilize seu crédito e que ele esteja em um valor abaixo de ${formatValue(
              user.credit_limit,
            )}.`,
            cancelText: undefined,
            onCancel: undefined,
            onConfirm: () => navigate('CreditHistory'),
            buttonText: 'Entendi',
          }));
        }

        if (user.value < valueToPay) {
          return setShowBalanceModal(state => ({
            ...state,
            visible: true,
            title: 'Saldo insuficiente',
            description: `Seu saldo não é suficiente, você precisa de pelo menos ${formatValue(
              valueToPay,
            )} para realizar o acerto digital.`,
            cancelText: undefined,
            onCancel: undefined,
            onConfirm: () => navigate('CreditHistory'),
            buttonText: 'Entendi',
          }));
        }
      }

      const response = await api.patch<UserAPI>('sellers/reckoning/value');

      handleRockoning({
        credit: response.data.credit,
        value: response.data.value,
      });

      navigate('Success', {
        message:
          'Tudo deu certo ao acertar seu crédito de venda! Agora você já pode utiliza-lo com o valor atualizado.',
      });
    } catch (err) {
      setShowBalanceModal(state => ({
        ...state,
        visible: true,
        title: 'Erro',
        description:
          'Houve um erro ao sacar, verifique se seu saldo já não está cheio, se estiver tente fechar o app e tentar novamente.',
        cancelText: undefined,
        onCancel: undefined,
        onConfirm: () => navigate('Home'),
      }));
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Title>Como você deseja realizar o acerto?</Title>
      <Description>
        Valor total a acertar: <Value>{formatValue(valueToPay)}</Value>
      </Description>

      <Main
        data={options}
        renderItem={({item}) => (
          <Card onPress={handleShowBalanceModal}>
            <CardInfo>
              {item.icon}

              <DescriptionContainer>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription numberOfLines={2}>
                  {item.description}
                </CardDescription>
              </DescriptionContainer>
            </CardInfo>

            <ArrowRight name="arrow-right" />
          </Card>
        )}
      />

      <TransparentLoading visible={loading} />

      <AlertModal
        visible={showBalanceModal.visible}
        animationType="fade"
        title={showBalanceModal.title}
        description={showBalanceModal.description}
        buttonText={showBalanceModal.buttonText}
        cancelText={showBalanceModal.cancelText}
        onConfirm={showBalanceModal.onConfirm}
        onCancel={showBalanceModal.onCancel}
      />
    </Container>
  );
};
