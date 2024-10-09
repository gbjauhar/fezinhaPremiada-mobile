import React from 'react';
import { Container, OptionText } from './styles';

export const FilterButton = ({ option, selected = false, ...rest }) => {
  return (
    <Container selected={selected} {...rest}>
      <OptionText selected={selected}>{option}</OptionText>
    </Container>
  );
};
