import {TextProps as RNTextProps} from 'react-native';
import {DefaultTheme} from 'styled-components/native';

export interface TextStyleProps {
  fontWeight?: keyof DefaultTheme['fontFamily'];
}

export interface TextProps extends RNTextProps, TextStyleProps {}
