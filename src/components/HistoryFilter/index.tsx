import React from 'react';
import {Container, Filter, FilterText} from './styles';

export interface Filter {
  name: string;
  selected?: boolean;
  value: string | Date;
}

interface HistoryFilterProps {
  filters: Filter[];
  onFilter: (date: string | Date) => void;
}

export const HistoryFilter = ({filters, onFilter}: HistoryFilterProps) => {
  return (
    <Container
      data={filters}
      keyExtractor={item => item.name}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Filter
          selected={item.selected ?? false}
          onPress={() => onFilter(item.value)}>
          <FilterText selected={item.selected ?? false} numberOfLines={1}>
            {item.name}
          </FilterText>
        </Filter>
      )}
    />
  );
};
