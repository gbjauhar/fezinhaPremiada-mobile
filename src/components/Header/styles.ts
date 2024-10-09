import {RFValue} from 'react-native-responsive-fontsize';
import {ThemeProps} from 'styled-components/dist/types';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: ${RFValue(24)}px;
  background-color: ${({theme}: ThemeProps) => theme.colors.background};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 19px;

  text-align: center;
  font-family: ${({theme}: ThemeProps) => theme.fontFamily.semiBold};
  color: ${({theme}: ThemeProps) => theme.colors.subtitle};
`;

export const Option = styled.View`
  width: 80px;
`;
