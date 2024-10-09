import {PrimaryButton} from '@components/PrimaryButton';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(PrimaryButton).attrs(({theme}) => ({
  textProps: {
    style: {
      color: theme.colors.subtitle,
    },
  },
}))`
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.colors.white};

  margin-top: ${RFValue(16)}px;
`;

export const Icon = styled(Ionicons)`
  margin-right: ${RFValue(8)}px;
  font-size: ${RFValue(20)}px;
`;
