import React, {ReactNode} from 'react';
import {ButtonText, Container} from './styles';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import theme from '@theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextProps} from '@components/Text';

export interface PrimaryButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  loading?: boolean;
  textProps?: Partial<TextProps>;
  icon?: ReactNode;
}

export const PrimaryButton = ({
  children,
  disabled = false,
  loading = false,
  icon,
  textProps,
  ...rest
}: PrimaryButtonProps) => {
  return (
    <Container {...rest} disabled={disabled || loading}>
      {icon}
      {loading ? (
        <ActivityIndicator size={RFValue(24)} color={theme.colors.buttonText} />
      ) : (
        <ButtonText fontWeight="bold" {...textProps}>
          {children}
        </ButtonText>
      )}
    </Container>
  );
};
