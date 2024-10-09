import {PrimaryButton} from '@components/PrimaryButton';
import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;

  align-items: center;
  justify-content: center;
`;

export const Main = styled.View`
  width: 90%;
  margin-top: ${RFValue(16)}px;
`;

export const Title = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.title};
  text-align: center;
`;

export const Button = styled(PrimaryButton)`
  margin-top: ${RFValue(16)}px;
`;
