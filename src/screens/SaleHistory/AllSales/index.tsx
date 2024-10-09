import React, {useEffect, useState} from 'react';
import {PrimaryButton} from '@components/PrimaryButton';
import {Text} from '@components/Text';
import {Alert, TextInput, View} from 'react-native';
import {Container, OptionsList, SecondOption, styles} from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import theme from '@theme';
import {api} from '@services/api';
import {useNavigate} from '@hooks/useNavigate';
import {formatDate, formatValue} from '@utils/formatValue';
import {Header} from '@components/Header';
import {BottomModal} from '@components/BottomModal';
import {useFilters} from '../hooks/useFilters';
import {FilterButton} from './components/FilterButton/index';

export const AllSales = () => {
  const [selledTitles, setSelled] = useState<SalesAPI[]>([]);
  const navigation = useNavigate();
  const {
    filters,
    modalRef,
    handleCloseFilter,
    handleOpenFilter,
    selectFilter,
    handleFilter,
    filterValue,
    filterSelected,
  } = useFilters();

  function handleGoSale(sales: SalesAPI) {
    navigation.navigate('SingleSale', {sales});
  }

  async function handleFiltering() {
    const filtered = await handleFilter();
    if (!filtered.success) {
      Alert.alert('Houve um erro, tente novamente');
    } else {
      setSelled(filtered.data);
    }
    handleCloseFilter();
  }

  useEffect(() => {
    api
      .get<SalesAPI[]>('selled-titles')
      .then(res => {
        setSelled(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <Header
        name={'Vendas'}
        secondOption={
          <SecondOption>
            <FontAwesome5
              name="filter"
              size={15}
              color={theme.colors.white}
              onPress={handleOpenFilter}
            />
            <Text onPress={handleOpenFilter}>Filtros</Text>
          </SecondOption>
        }
      />
      <Container>
        {selledTitles?.map(s => (
          <View key={s.id} style={styles.card}>
            <View style={styles.up}>
              <Text style={styles.title}>{s.buyed_titles.user.name}</Text>
              {s.buyed_titles.status === 'PENDING' ? (
                <FontAwesome5
                  name="clock"
                  size={20}
                  color={theme.colors.title}
                />
              ) : s.buyed_titles.status === 'CANCEL' ? (
                <FontAwesome5
                  name="times-circle"
                  size={20}
                  color={theme.colors.status.required}
                />
              ) : (
                <FontAwesome5
                  name="check-circle"
                  size={20}
                  color={theme.colors.green}
                />
              )}
            </View>
            <View style={styles.content}>
              <View style={styles.icons}>
                <FontAwesome5
                  name="shopping-cart"
                  size={20}
                  color={theme.colors.green}
                />
                <FontAwesome5
                  name="dollar-sign"
                  size={20}
                  color={theme.colors.green}
                />
                <FontAwesome5
                  name="calendar"
                  size={20}
                  color={theme.colors.green}
                />
                <FontAwesome5
                  name="hand-holding-usd"
                  size={20}
                  color={theme.colors.green}
                />
              </View>
              <View style={styles.text}>
                <Text>{s.description}</Text>
                <Text>{formatValue(s.buyed_titles.total)}</Text>
                <Text>{formatDate(s.buyed_titles.created_at)}</Text>
                <Text>
                  Forma de pagamento:{' '}
                  {s.buyed_titles.payment_form === 'CREDIT'
                    ? 'Crédito de venda'
                    : s.buyed_titles.payment_form === 'BALANCE'
                    ? 'Saldo'
                    : 'PIX'}
                </Text>
              </View>
            </View>
            <PrimaryButton
              style={styles.button}
              onPress={() => handleGoSale(s)}>
              Detalhes
            </PrimaryButton>
          </View>
        ))}
      </Container>
      <BottomModal
        ref={modalRef}
        title="Filtrar títulos"
        body={
          <View style={styles.filterContainer}>
            <Text style={styles.filterTitle}>
              Selecione pelo quê quer filtrar:
            </Text>

            <OptionsList
              data={filters}
              keyExtractor={item => String(item.id) + String(item.selected)}
              renderItem={({item, index}) => (
                <FilterButton
                  option={item.name}
                  selected={filterSelected.name === item.name}
                  onPress={() => selectFilter(index)}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <TextInput
              placeholderTextColor={theme.colors.titleDark}
              style={styles.input}
              placeholder="Escreva"
              onEndEditing={e => filterValue(e.nativeEvent.text)}
            />
          </View>
        }
        footer={
          <>
            <PrimaryButton onPress={handleFiltering}>Filtrar</PrimaryButton>
          </>
        }
      />
    </>
  );
};
