import React, {useState} from 'react';
import {Container, Main} from './styles';
import {Alert} from 'react-native';
import {getErrorMessage} from '@utils/getErrorMessage';
import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';
import {api} from '@services/api';
import {
  EmptyText,
  FilterContainer,
  FilterIcon,
  FilterTitle,
} from '../Commissions/styles';
import {TransparentLoading} from '@components/TransparentLoading';
import {CalendarModal} from '../components/CalendarModal';
import {ClientCounterInfo} from '../components/ClientCounterInfo';
import {useInfiniteQuery} from '@tanstack/react-query';
import {ReportTitleCard} from '../components/ReportTitleCard';

export const Winners = () => {
  const [totalValue, setTotalValue] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [filterLabel, setFilterLabel] = useState('Últimos 7 dias');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  function handleChangeFilter() {
    setShowFilter(state => !state);
  }

  const {data, isFetching, fetchNextPage} = useInfiniteQuery({
    queryKey: ['winners', startDate, endDate],
    queryFn: async ({pageParam = 0}) => {
      try {
        const response = await api.get<Edition[]>('sellers/reports/winners', {
          params: {
            offset: pageParam,
            startDate,
            endDate,
          },
        });

        setTotalValue(response.data.length);

        return {
          nextCursor: pageParam + 1,
          data: response.data,
        };
      } catch (err) {
        const message = getErrorMessage(err);
        Alert.alert(
          'Erro ao buscar comissões',
          `Houve um erro ao buscar suas comissões, verifique se houve alguma venda neste período e tente novamente \n\nErro: ${message}`,
        );

        return {
          nextCursor: pageParam,
        };
      }
    },
    getNextPageParam: lastPage => lastPage.nextCursor,
  });

  async function handleConfirm(initialDate: Date, endDate: Date) {
    setStartDate(initialDate);
    setEndDate(endDate);

    setFilterLabel(
      `De ${format(initialDate, 'dd/MM/yyyy', {locale: ptBR})} até ${format(
        endDate,
        'dd/MM/yyyy',
        {locale: ptBR},
      )}`,
    );

    handleChangeFilter();
  }

  return (
    <Container>
      <Main
        data={data?.pages?.map(page => page.data).flat() as Edition[]}
        keyExtractor={item => item.id}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.1}
        renderItem={({item}) => (
          <ReportTitleCard
            title={item.name}
            description={item.winner.name}
            created_at={item.created_at}
            doccument={item.winner.doccument}
          />
        )}
        ListHeaderComponent={
          <>
            <ClientCounterInfo
              title="Total de ganhadores"
              commissions={totalValue}
              numberTitle="ganhadores"
            />

            <FilterContainer onPress={() => setShowFilter(true)}>
              <FilterIcon />

              <FilterTitle>{filterLabel}</FilterTitle>
            </FilterContainer>
          </>
        }
        ListEmptyComponent={
          <EmptyText>Sem nenhuma comissão nesse período</EmptyText>
        }
      />
      <TransparentLoading visible={isFetching} />

      <CalendarModal visible={showFilter} onConfirm={handleConfirm} />
    </Container>
  );
};
