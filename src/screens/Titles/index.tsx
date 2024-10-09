import React, {useCallback} from 'react';
import {
  Container,
  Main,
  Title,
  Description,
  BodyTitle,
  SelectedTitlesText,
  NumberOfTitles,
  DozensList,
} from './styles';
import {TitleCard} from './components/TitleCard';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {useTitles} from './hooks/useTitles';
import {BottomModal} from '@components/BottomModal';
import {Dozen} from './components/Dozen';
import {PrimaryButton} from '@components/PrimaryButton';
import {EmptyState} from './components/EmptyState';
import {format} from 'date-fns';
import {useNavigate} from '@hooks/useNavigate';
import {useFocusEffect} from '@react-navigation/native';
import {TransparentLoading} from '@components/TransparentLoading';

export const Titles = () => {
  const {
    handleGetTitles,
    title,
    changeTitle,
    dozens,
    selectFilter,
    filteredDozens,
    filter,
    modalRef,
    handleOpenFilter,
    addToCart,
    loading,
  } = useTitles();

  const {navigate} = useNavigate();

  const onFocusScreen = useCallback(() => {
    handleGetTitles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(onFocusScreen);

  function handleGoCart() {
    navigate('ShowCart');
  }

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
            <TitleCard
              name={title.name}
              price={title.value}
              chance={title.chances}
              dozens={title?.dozens}
            />
          ) : (
            <EmptyState />
          )}
        </Main>
      </Container>

      <Footer
        onPressTurn={changeTitle}
        onPressFilter={handleOpenFilter}
        onConfirm={handleGoCart}
        onPressChoose={addToCart}
      />

      <BottomModal
        ref={modalRef}
        title="Filtrar títulos"
        body={
          <>
            <NumberOfTitles>
              <BodyTitle>Números no título(s):</BodyTitle>
              <SelectedTitlesText>
                {filteredDozens.length} selecionado(s)
              </SelectedTitlesText>
            </NumberOfTitles>

            <DozensList
              data={dozens}
              keyExtractor={item => String(item.id) + String(item.selected)}
              renderItem={({item, index}) => (
                <Dozen
                  dozen={item.id}
                  selected={filteredDozens.some(dozen => dozen === item.id)}
                  onPress={() => selectFilter(index)}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
        footer={
          <>
            <PrimaryButton onPress={filter}>Filtrar</PrimaryButton>
          </>
        }
      />

      <TransparentLoading visible={loading} />
    </>
  );
};
