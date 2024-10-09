import React, {useEffect, useState} from 'react';
import {
  Container,
  EmptyText,
  FilterContainer,
  FilterIcon,
  FilterTitle,
  Main,
} from './styles';
import {EarningsInfo} from '@components/EarningsInfo';
import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';
import {CalendarModal} from '../components/CalendarModal';
import {api} from '@services/api';
import {TransparentLoading} from '@components/TransparentLoading';
import {Alert} from 'react-native';
import {getErrorMessage} from '@utils/getErrorMessage';
import {ComissionCard} from '../components/ComissionCard';

export const CommissionsReport = () => {
  const [totalValue, setTotalValue] = useState(0);
  const [commissions, setCommissions] = useState<History[]>([]);
  const [showFilter, setShowFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filterLabel, setFilterLabel] = useState('Últimos 7 dias');

  function handleChangeFilter() {
    setShowFilter(state => !state);
  }

  useEffect(() => {
    api
      .get('sellers/reports/commissions')
      .then(response => {
        setCommissions(response.data.commissions);
        setTotalValue(response.data.totalValue);
      })
      .finally(() => setLoading(false));
  }, []);

  async function handleConfirm(initialDate: Date, endDate: Date) {
    setLoading(true);
    try {
      const response = await api.get('sellers/reports/commissions', {
        params: {
          initial_date: initialDate,
          end_date: endDate,
        },
      });

      setCommissions(response.data.commissions);
      setTotalValue(response.data.totalValue);

      setFilterLabel(
        `De ${format(initialDate, 'dd/MM/yyyy', {locale: ptBR})} até ${format(
          endDate,
          'dd/MM/yyyy',
          {locale: ptBR},
        )}`,
      );
    } catch (err) {
      const message = getErrorMessage(err);
      Alert.alert(
        'Erro ao buscar comissões',
        `Houve um erro ao buscar suas comissões, verifique se houve alguma venda neste período e tente novamente \n\nErro: ${message}`,
      );
    } finally {
      handleChangeFilter();
      setLoading(false);
    }
  }

  return (
    <Container>
      <Main
        data={commissions}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ComissionCard
            title={item.name}
            description={item.description}
            created_at={item.created_at}
            value={item.value}
          />
        )}
        ListHeaderComponent={
          <>
            <EarningsInfo title="Ganhos totais" commissions={totalValue} />

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
      <TransparentLoading visible={loading} />

      <CalendarModal visible={showFilter} onConfirm={handleConfirm} />
    </Container>
  );
};
