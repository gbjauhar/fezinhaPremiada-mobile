import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {TextStyleProps} from './text.props';

export const TextItem = styled.Text<TextStyleProps>`
  font-family: ${({theme, fontWeight}) =>
    theme.fontFamily[fontWeight || 'regular']};
  color: ${({theme}) => theme.colors.subtitle};
  font-size: ${RFValue(16)}px;
`;
