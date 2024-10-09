import React from 'react';
import {Container, NumberText} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface DozenProps extends TouchableOpacityProps {
  dozen: string | number;
  selected?: boolean;
}

export const Dozen = ({dozen, selected = false, ...rest}: DozenProps) => {
  return (
    <Container selected={selected} {...rest}>
      <NumberText selected={selected}>
        {String(dozen).padStart(2, '0')}
      </NumberText>
    </Container>
  );
};
