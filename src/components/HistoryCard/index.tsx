import React, {useMemo} from 'react';
import {
  Container,
  Pointer,
  InfoContainer,
  HistoryTitle,
  HistoryDescription,
  HistoryHeader,
  BoletoIcon,
  PixIcon,
} from './styles';

import theme from '@theme';
import {RFValue} from 'react-native-responsive-fontsize';

interface HistoryCardProps {
  title: string;
  description: string;
  deposit_type: History['deposit_type'];
}

export const HistoryCard = ({
  title,
  description,
  deposit_type,
}: HistoryCardProps) => {
  const iconType = useMemo(() => {
    switch (deposit_type) {
      case 'BOLETO':
        return (
          <BoletoIcon
            color={theme.colors.icons}
            width={RFValue(16)}
            height={RFValue(16)}
          />
        );
      case 'PIX':
        return (
          <PixIcon
            color={theme.colors.icons}
            width={RFValue(16)}
            height={RFValue(16)}
          />
        );
      default:
        return null;
    }
  }, [deposit_type]);

  return (
    <Container>
      <Pointer />

      <InfoContainer>
        <HistoryHeader>
          {iconType}
          <HistoryTitle>{title}</HistoryTitle>
        </HistoryHeader>

        {description && <HistoryDescription>{description}</HistoryDescription>}
      </InfoContainer>
    </Container>
  );
};
