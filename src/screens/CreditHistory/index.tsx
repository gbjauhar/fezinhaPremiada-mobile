import {Alert} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  HistoryList,
  DayTitle,
  EmptyText,
  Spacer,
  ActivityIndicator,
  Button,
  AlertButton,
  InfoContainer,
  InfoText,
  ValueText,
} from './styles';
import {api} from '@services/api';
import {HistoryCard} from '@components/HistoryCard';
import {format, subDays} from 'date-fns';
import theme from '@theme';
import {Filter, HistoryFilter} from '@components/HistoryFilter';
import {CreditInfo} from '@components/CreditInfo';
import {RFValue} from 'react-native-responsive-fontsize';
import {useStores} from '@hooks/root-store';
import {observer} from 'mobx-react-lite';
import {formatValue} from '@utils/formatValue';
import {useNavigate} from '@hooks/useNavigate';

export const CreditHistory = observer(() => {
  const [history, setHistory] = useState<ValueHistory['history']>([]);
  const [commissions, setCommissions] = useState(0);
  const [loading, setLoading] = useState(true);
  const atualDate = useRef(new Date());
  const navigation = useNavigate();

  const {user} = useStores();

  const [filters, setFilters] = useState<Filter[]>([
    {
      name: '30 dias',
      selected: true,
      value: subDays(atualDate.current, 30),
    },
    {
      name: '15 dias',
      selected: false,
      value: subDays(atualDate.current, 15),
    },
    {
      name: '7 dias',
      selected: false,
      value: subDays(atualDate.current, 7),
    },
  ]);

  useEffect(() => {
    api
      .get<ValueHistory>('credit-history/all')
      .then(response => {
        setCommissions(response.data.commission);
        setHistory(response.data.history);
      })
      .catch(error => {
        Alert.alert(
          'Ops!',
          'Ocorreu um erro ao buscar seu histórico, tente novamente mais tarde',
        );

        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  async function onFilter(date: string | Date) {
    setLoading(true);
    try {
      setFilters(state => {
        const newState = state.map(filter => ({
          ...filter,
          selected: filter.value === date ? true : false,
        }));

        return newState;
      });

      const response = await api.get<ValueHistory>('credit-history/all', {
        params: {
          date,
        },
      });

      setCommissions(response.data.commission);
      setHistory(response.data.history);
    } catch (err) {
      Alert.alert(
        'Não encontramos nada!',
        'Ocorreu um erro ao filtrar seu histórico, tente novamente mais tarde',
      );
    } finally {
      setLoading(false);
    }
  }

  const valueToPay = useMemo(() => {
    if (user?.credit && user.credit_limit) {
      return user.credit_limit - user.credit;
    }

    return 0;
  }, [user?.credit, user?.credit_limit]);

  return (
    <Container>
      {valueToPay > 0 && (
        <AlertButton>
          <InfoContainer>
            <Ionicons
              name="arrow-redo-outline"
              color={theme.colors.status.required}
              size={RFValue(20)}
              style={{
                transform: [{rotateY: '180deg'}],
              }}
            />
            <InfoText>Valor à pagar</InfoText>
          </InfoContainer>

          <ValueText>{formatValue(valueToPay)}</ValueText>
        </AlertButton>
      )}

      <CreditInfo credit={user?.credit} commissions={commissions} />

      <Button onPress={() => navigation.navigate('SelectMethod')}>
        Acerto digital
      </Button>

      <HistoryList
        scrollEnabled
        sections={history}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator
              size="large"
              color={theme.colors.buttonBackground}
            />
          ) : (
            <EmptyText>Sem nenhum histórico no momento</EmptyText>
          )
        }
        ListHeaderComponent={
          <HistoryFilter onFilter={onFilter} filters={filters} />
        }
        ListFooterComponent={
          <Spacer>
            {loading && history.length > 0 ? (
              <ActivityIndicator
                size="large"
                color={theme.colors.buttonBackground}
              />
            ) : undefined}
          </Spacer>
        }
        renderItem={({item}) => (
          <HistoryCard
            title={item.name}
            description={item.description}
            deposit_type={item.deposit_type}
          />
        )}
        renderSectionHeader={({section: {data}}) => (
          <DayTitle>
            Dia {format(new Date(data[0].created_at), 'dd/MM/yyyy')}
          </DayTitle>
        )}
      />
    </Container>
  );
});
