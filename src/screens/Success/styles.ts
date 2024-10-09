import {Text} from '@components/Text';
import styled from 'styled-components/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {RFValue} from 'react-native-responsive-fontsize';
import {PrimaryButton} from '@components/PrimaryButton';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.green};
`;

export const CheckIcon = styled(FontAwesome5Icon)`
  font-size: ${RFValue(64)}px;
  color: ${({theme}) => theme.colors.subtitle};

  margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled(Text).attrs({
  fontWeight: 'bold',
})`
  text-align: center;
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.subtitle};
`;

export const Description = styled(Text).attrs({
  fontWeight: 'semiBold',
})`
  text-align: center;
  max-width: 75%;
`;

export const Button = styled(PrimaryButton)`
  width: 75%;
  margin-top: ${RFValue(24)}px;
`;
