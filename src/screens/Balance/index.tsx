import React, {useEffect, useRef, useState} from 'react';
import {
  Container,
  HistoryList,
  DayTitle,
  EmptyText,
  Spacer,
  ActivityIndicator,
} from './styles';
import {BalanceInfo} from '@components/BalanceInfo';
import {api} from '@services/api';
import {HistoryCard} from '@components/HistoryCard';
import {format, subDays} from 'date-fns';
import {Alert} from 'react-native';
import theme from '@theme';
import {Filter, HistoryFilter} from '@components/HistoryFilter';

export const Balance = () => {
  const [history, setHistory] = useState<ValueHistory['history']>([]);
  const [commissions, setCommissions] = useState(0);
  const [loading, setLoading] = useState(true);
  const atualDate = useRef(new Date());

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
      .get<ValueHistory>('value-history/all')
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

      const response = await api.get<ValueHistory>('value-history/all', {
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

  return (
    <Container>
      <BalanceInfo commissions={commissions} />

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
};
