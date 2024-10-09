import React from 'react';
import {Share} from 'react-native';
import {Container, Icon} from './styles';
import theme from '@theme';

interface ShareButtonProps {
  contentToShare: string;
}

export const ShareButton = ({contentToShare}: ShareButtonProps) => {
  async function handleShare() {
    await Share.share({
      message: contentToShare,
      url: contentToShare,
    });
  }

  return (
    <Container
      icon={<Icon name="arrow-redo-outline" color={theme.colors.subtitle} />}
      onPress={handleShare}>
      Compartilhar
    </Container>
  );
};
