import {api} from '@services/api';
import {getRandomFromArray} from '@utils/getRandomFromArray';
import {useCallback, useRef, useState} from 'react';
import {Modalize} from 'react-native-modalize';

import {DOZENS} from '../constants';
import {useStores} from '@hooks/root-store';
import {Alert} from 'react-native';

export interface SetCartDto {
  id: string;
  name: string;
  price: string;
  chances: string;
}

export function useTitles() {
  const [title, setTitle] = useState<Title | null>(null);
  const [allTitles, setAllTitles] = useState<Title[]>([]);
  const [dozens, setDozens] = useState(DOZENS);
  const [loading, setLoading] = useState(false);
  const {cartStore} = useStores();

  const [filteredDozens, setFilteredDozens] = useState<number[]>([]);

  const modalRef = useRef<Modalize>(null);

  const handleGetTitles = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get<Title[]>('titles');

      let titles = [];
      for (const titleData of response.data) {
        const hasInCart = cartStore.cartList.some(
          item => item.selected_id === titleData.id,
        );

        if (!hasInCart) {
          titles.push(titleData);
        }
      }

      setAllTitles(titles);
      setTitle(titles[0] ?? null);
    } catch (error) {
      Alert.alert(
        `Houve um erro ao buscar os titulos, tente novamente! \n\nError: ${error}`,
      );
    } finally {
      setLoading(false);
    }
  }, [cartStore]);

  const changeTitle = useCallback(() => {
    const randomTitle = getRandomFromArray<Title>(allTitles, title);

    setTitle(randomTitle);
  }, [allTitles, title]);

  const removeTitle = useCallback(
    (titleId: string) => {
      const filteredAllTitles = allTitles.filter(item => item.id !== titleId);
      const randomTitle = getRandomFromArray<Title>(filteredAllTitles, title);

      setTitle(randomTitle);
      setAllTitles(filteredAllTitles);
    },
    [allTitles, title],
  );

  const selectFilter = useCallback(
    (index: number) => {
      const dozenCopy = dozens;
      dozenCopy[index].selected = true;
      setFilteredDozens(state => {
        if (state.includes(dozenCopy[index].id)) {
          return state.filter(item => item !== dozenCopy[index].id);
        }

        return [...state, dozenCopy[index].id];
      });

      setDozens(dozenCopy);
    },
    [dozens],
  );

  const filter = useCallback(() => {
    if (filteredDozens.length > 0) {
      const newTitle = allTitles.filter(item => {
        return filteredDozens.some(dozens =>
          item.dozens.includes(dozens.toString()),
        );
      });

      setTitle(newTitle[0]);
    }

    handleCloseFilter();
  }, [filteredDozens, allTitles]);

  const addToCart = useCallback(() => {
    if (title) {
      cartStore.addToCart({
        chances: String(title?.chances),
        name: title?.name,
        id: title?.id,
        price: String(title.value),
      });

      removeTitle(title.id);
    }
  }, [title, cartStore, removeTitle]);

  function handleOpenFilter() {
    modalRef.current?.open();
  }

  function handleCloseFilter() {
    modalRef.current?.close();
  }

  return {
    title,
    handleGetTitles,
    changeTitle,
    dozens,
    filteredDozens,
    selectFilter,
    filter,
    modalRef,
    handleOpenFilter,
    handleCloseFilter,
    addToCart,
    loading,
    allTitles,
  };
}
