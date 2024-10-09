import React, {useCallback, useMemo, useState} from 'react';
import {Container, Description, Main, Title} from './styles';
import {EmptyState} from '@screens/Titles/components/EmptyState';
import {Header} from '@screens/Titles/components/Header';
import {useTitles} from '@screens/Titles/hooks/useTitles';
import {useFocusEffect} from '@react-navigation/native';
import {format} from 'date-fns';
import {TitleQuickSale} from './components/Title';
import {
  adjustArray,
  getRandomElementsFromArray,
} from '@utils/getRandomFromArray';
import {FooterTitle} from './components/FooterTitle';
import {Footer} from './components/Footer';
import {useStores} from '@hooks/root-store';
import {useNavigate} from '@hooks/useNavigate';

export const QuickSale = () => {
  const {handleGetTitles, title, allTitles} = useTitles();
  const [selectedTitles, setSelectedTitles] = useState<Title[]>([]);
  const [quantity, setQuantity] = useState<string>('0');
  const {
    cartStore: {addToCart},
  } = useStores();
  const navigation = useNavigate();

  const onFocusScreen = useCallback(() => {
    handleGetTitles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(onFocusScreen);

  function handleAddValue(value: string) {
    console.log(value);
    if (value.trim() === '') {
      return setQuantity('0');
    }

    const formatedValue = Number(value.replace(/\D/g, ''));
    const correctValue =
      formatedValue > allTitles.length ? allTitles.length : formatedValue;
    if (correctValue <= 0) {
      return;
    }

    const titles = getRandomElementsFromArray(allTitles, correctValue);

    setSelectedTitles(titles);
    setQuantity(String(correctValue));
  }

  function handlePressDozen(dozen: string) {
    const correctValue = Number(dozen.replace(/\D/g, ''));

    const newQuantity =
      Number(quantity) + correctValue > allTitles.length
        ? allTitles.length
        : Number(quantity) + Number(correctValue);
    const titles = getRandomElementsFromArray(allTitles, newQuantity);

    setSelectedTitles(titles);
    setQuantity(String(newQuantity));
  }

  const handleAddToCart = useCallback(async () => {
    for (const titleData of selectedTitles) {
      await addToCart({
        chances: String(titleData.chances),
        id: titleData.id,
        name: titleData.name,
        price: String(titleData.value),
      });
    }

    navigation.navigate('ShowCart');
  }, [selectedTitles, addToCart, navigation]);

  const totalValue = useMemo(() => {
    return selectedTitles.reduce((acc, item) => acc + item.value, 0);
  }, [selectedTitles]);

  return (
    <>
      <Container>
        <Header />
        <Title>Edição {title?.edition.name}</Title>
        <Description>
          Sorteio:{' '}
          {title?.edition.draw_date &&
            format(new Date(title?.edition.draw_date), 'dd/MM/yyyy - HH:mm')}
        </Description>
        <Main>
          {title ? (
            <TitleQuickSale
              dozens={adjustArray(
                ['10', '15', '20', '25', '30', '50', '60', '80', '100'],
                allTitles,
              )}
              onPressDozen={handlePressDozen}
            />
          ) : (
            /* <TitleCard
              name={title.name}
              price={title.value}
              chance={title.chances}
              dozens={title?.dozens}
            /> */
            <EmptyState />
          )}

          <FooterTitle
            onChangeText={handleAddValue}
            onPressPlus={() =>
              handleAddValue(String(selectedTitles.length + 1))
            }
            onPressMinus={() =>
              handleAddValue(String(selectedTitles.length - 1))
            }
            value={quantity}
          />
        </Main>

        <Footer value={totalValue} onPress={handleAddToCart} />
      </Container>
    </>
  );
};
