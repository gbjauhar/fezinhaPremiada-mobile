import React from 'react';
import {Dozens, DozenContainer, Dozen, Title} from './styles';
import theme from '@theme';
import {TouchableOpacity} from 'react-native';

export interface TitleCardProps {
  dozens: string[];
  onPressDozen: (dozen: string) => void;
}

export const TitleQuickSale = ({dozens, onPressDozen}: TitleCardProps) => {
  return (
    <Dozens
      data={dozens}
      keyExtractor={item => String(item)}
      scrollEnabled={false}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => onPressDozen(item)}>
          <DozenContainer
            colors={[theme.colors.dozens.initial, theme.colors.dozens.final]}>
            <Dozen>{String(item).padStart(2, '0')}</Dozen>
          </DozenContainer>
        </TouchableOpacity>
      )}
      ListHeaderComponent={() => (
        <Title>
          Selecione a quantidade de títulos que quer vender aleatoriamente.
        </Title>
      )}
      numColumns={3}
    />
  );
};
