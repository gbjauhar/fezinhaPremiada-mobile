import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Container, styles} from './styles';
import {useNavigate} from '@hooks/useNavigate';
import {useStores} from '@hooks/root-store';
import {Controller, useForm} from 'react-hook-form';
import theme from '@theme';
import {formatValue, testCPF} from '@services/cpfValues';
import {formatValue as formatPrice} from '@utils/formatValue';
import {patchSale} from '@services/auth';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {getErrorMessage} from '@utils/getErrorMessage';
import {AlertModal, AlertModalProps} from '@components/AlertModal';
import {TransparentLoading} from '@components/TransparentLoading';

type FormData = {
  doccument: string;
};

const userSchema = yup.object({
  doccument: yup.string().test('valid-cpf-cnpj', 'CPF inválido', value => {
    return testCPF(value ?? '');
  }),
});

export const Order = () => {
  const {payment, cartStore, user} = useStores();
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showBalanceModal, setShowBalanceModal] = useState<AlertModalProps>({
    visible: false,
    animationType: 'fade',
    title: 'Cliente não encontrado',
    description:
      'Não encontramos nenhum cliente com este CPF/CNPJ, deseja cadastrar esse cliente?',
    buttonText: 'Sim',
    cancelText: 'Não',
    onConfirm: () => navigation.navigate('RegisterClient'),
    onCancel: () =>
      setShowBalanceModal(state => ({
        ...state,
        visible: !state.visible,
      })),
  });
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    let titles: string[] = [];
    cartStore.cartList.forEach(title => titles.push(title.selected_id));
    const body = {
      user_doccument: data.doccument,
      titles: titles,
      payment_form:
        payment === 'PIX'
          ? 'pix'
          : payment === 'dinheiro (crédito de venda)'
          ? 'CREDIT'
          : 'BALANCE',
      code: user?.code,
    };
    if (payment === 'PIX') {
      navigation.navigate('QrCode');
    }
    await patchSale(body)
      .then(res => {
        if (res.success) {
          Alert.alert(
            'Venda realizada com sucesso!',
            'Você será redirecionado para a página inicial.',
          );
          navigation.navigate('Home');
          cartStore.deleteAll();
        } else {
          const message = getErrorMessage(res.data);
          if (message === 'Usuário não existe') {
            setShowBalanceModal(state => ({
              ...state,
              visible: true,
            }));
          } else {
            Alert.alert(
              'Houve um erro ao realizar a venda',
              `Houve um erro ao realizar a venda, verifique se esse título ainda está disponível!\n\nErro: ${message}`,
            );
          }
        }
      })
      .finally(() => setLoading(false));
  };
  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.topMenu}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.topMenu.text}>Carrinho</Text>
        </View>
        <View style={styles.main}>
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
                maxLength={14}
                keyboardType="numeric"
              />
            )}
            name="doccument"
            defaultValue=""
          />
          <Text style={styles.required}>{errors.doccument?.message}</Text>
        </View>
      </Container>
      <View style={styles.footer}>
        <Text style={styles.subtitle}>Forma de pagamento escolhida:</Text>
        <Text style={styles.title}>Pagar com {payment}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.subtitle}>Total</Text>
        <Text style={styles.value}>
          {formatPrice(cartStore.totalCartValue)}
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.button.text}>Continuar</Text>
        </TouchableOpacity>
      </View>
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

      <TransparentLoading visible={loading} />
    </View>
  );
};
