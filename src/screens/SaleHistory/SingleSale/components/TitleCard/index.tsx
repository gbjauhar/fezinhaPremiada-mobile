import React from 'react';
import theme from '@theme';
import { Container, Dozen, DozenContainer, Dozens } from './styles';
import { TitleCardHeader } from '../TitleCardHeader';
import { View } from 'react-native';

export interface TitleCardProps {
  dozens: string[];
  name: string;
  chance: number;
  price: number;
}

export const TitleCard = ({ dozens, ...rest }: TitleCardProps) => {
  return (
    <Container>
      <TitleCardHeader {...rest} />

      <Dozens
        data={dozens}
        keyExtractor={item => String(item)}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <DozenContainer
            colors={[theme.colors.dozens.initial, theme.colors.dozens.final]}>
            <Dozen>{String(item).padStart(2, '0')}</Dozen>
          </DozenContainer>
        )}
        numColumns={4}
      />
    </Container>
  );
};
