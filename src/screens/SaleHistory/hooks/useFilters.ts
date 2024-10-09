import {api} from '@services/api';
import {useCallback, useRef, useState} from 'react';
import {Modalize} from 'react-native-modalize';

const FILTERS = [
  {id: 1, name: 'Nome', APIname: 'name', selected: false, type: 'user'},
  {id: 2, name: 'CPF', APIname: 'doccument', selected: false, type: 'user'},
  {id: 3, name: 'Telefone', APIname: 'cel', selected: false, type: 'user'},
  {id: 4, name: 'Email', APIname: 'email', selected: false, type: 'user'},
  {
    id: 5,
    name: 'Forma de pagamento',
    APIname: 'type',
    selected: false,
    type: 'sell',
  },
  {id: 6, name: 'Status', APIname: 'status', selected: false, type: 'sell'},
];

export function useFilters() {
  const [filterSelected, setFilterSelected] = useState<any>({});
  const [filters] = useState(FILTERS);
  const modalRef = useRef<Modalize>(null);

  const selectFilter = useCallback(
    (index: number) => {
      const filterCopy = filters;
      filterCopy[index].selected = true;
      setFilterSelected(filterCopy[index]);
    },
    [filters],
  );

  const filterValue = useCallback(
    (value: string) => {
      setFilterSelected({...filterSelected, value: value});
      console.log(value);
    },
    [filterSelected],
  );

  const handleFilter = useCallback(async () => {
    let body;
    if (filterSelected.type === 'user') {
      body = {
        userFilters: filterSelected.APIname,
        value: filterSelected.value,
      };
    } else if (filterSelected.value === 'Aguardando pagamento') {
      body = {
        sellFilter: filterSelected.APIname,
        value: 'PENDING',
      };
    } else if (filterSelected.value === 'Concluída') {
      body = {
        sellFilter: filterSelected.APIname,
        value: 'DONE',
      };
    } else if (filterSelected.value === 'Cancelada') {
      body = {
        sellFilter: filterSelected.APIname,
        value: 'CANCEL',
      };
    }
    const response = await api
      .post('selled-titles/filter', body)
      .then(res => {
        return {success: true, data: res.data};
      })
      .catch(err => {
        return {success: false, data: err};
      });
    return response;
  }, [filterSelected]);

  function handleOpenFilter() {
    modalRef.current?.open();
  }

  function handleCloseFilter() {
    modalRef.current?.close();
  }

  return {
    handleFilter,
    handleOpenFilter,
    handleCloseFilter,
    filters,
    modalRef,
    selectFilter,
    filterValue,
    filterSelected,
  };
}
