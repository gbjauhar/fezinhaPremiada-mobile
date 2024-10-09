import React, {useState} from 'react';
import {Container, Main} from './styles';
import {Alert} from 'react-native';
import {getErrorMessage} from '@utils/getErrorMessage';
import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';
import {api} from '@services/api';
import {ComissionCard} from '../components/ComissionCard';
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

export interface ClientSales {
  id: string;
  name: string;
  email: string;
  doccument: string;
  code: string;

  seller: UserAPI;

  done_sales: number;
  pending_sales: number;
  total_sale_value: number;

  created_at: Date | string;
  updated_at: Date | string;
}

export const ClientSales = () => {
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
        const response = await api.get<ClientSales[]>(
          'sellers/reports/client-sales',
          {
            params: {
              offset: pageParam,
              startDate,
              endDate,
            },
          },
        );

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
        data={data?.pages?.map(page => page.data).flat() as ClientSales[]}
        keyExtractor={item => item.id}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.1}
        renderItem={({item}) => (
          <ComissionCard
            title={item.name}
            description={item.doccument}
            created_at={item.created_at}
            value={item.total_sale_value}
          />
        )}
        ListHeaderComponent={
          <>
            <ClientCounterInfo
              title="Total de clientes"
              commissions={totalValue}
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
