import {PrimaryButton} from '@components/PrimaryButton';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/FontAwesome';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(PrimaryButton).attrs(({theme}) => ({
  textProps: {
    style: {
      color: theme.colors.subtitle,
    },
  },
}))`
  background-color: ${({theme}) => theme.colors.icons};
`;

export const Icon = styled(Feather)`
  margin-right: ${RFValue(8)}px;
  font-size: ${RFValue(20)}px;
`;
