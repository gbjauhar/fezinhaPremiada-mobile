import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';

import {CustomFocusNameRef, CustomInputRef, InputProps} from './input.props';
import {
  Container,
  Input as RNInput,
  Fieldset,
  Label,
  ErrorText,
  TextInputMask,
} from './input.styles';
import theme from '@theme';

const InputComponent: React.ForwardRefRenderFunction<
  CustomFocusNameRef,
  InputProps
> = ({control, placeholder, label, name, error, mask, ...rest}, ref) => {
  const inputRef = useRef<CustomInputRef>(null);

  const focusName = useCallback(
    (focusName: string) => {
      console.log(`${focusName} and ${name}`);
      if (focusName === name) {
        inputRef?.current?.focus();
      }
    },
    [name, inputRef],
  );

  useImperativeHandle(ref, () => ({
    focusName,
  }));

  return (
    <Container
      control={control}
      name={name}
      rules={{
        required: true,
      }}
      render={({field: {onChange, onBlur, value}}) => (
        <Fieldset>
          <Label>{label}</Label>
          {!mask ? (
            <RNInput
              ref={inputRef}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              error={!!error}
              placeholderTextColor={theme.colors.titleDark}
              {...rest}
            />
          ) : (
            <TextInputMask
              ref={inputRef}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              type={mask.type || 'cel-phone'}
              options={mask}
              error={!!error}
              placeholderTextColor={theme.colors.titleDark}
              {...rest}
            />
          )}
          {error && <ErrorText>{error}</ErrorText>}
        </Fieldset>
      )}
    />
  );
};

export const Input = forwardRef(InputComponent);
