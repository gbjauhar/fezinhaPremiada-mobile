import React from 'react';
import {CloseButton, CloseIcon, Container, Title} from './styles';

interface TitleCardProps {
  name: string;
  code: string;
  onDelete: () => void;
}

export const TitleCard = ({name, onDelete}: TitleCardProps) => {
  return (
    <Container>
      <Title selectable={true}>{name}</Title>

      <CloseButton onPress={onDelete}>
        <CloseIcon />
      </CloseButton>
    </Container>
  );
};
