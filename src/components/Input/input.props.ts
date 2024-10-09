import {Control} from 'react-hook-form';
import {TextInput, TextInputProps} from 'react-native';
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
  TextInputMask,
} from 'react-native-masked-text';

type Fields = any;

export interface InputProps extends TextInputProps {
  control: Control<Fields, any>;
  placeholder: string;
  label?: string;
  name: string;
  error?: string;
  mask?: TextInputMaskOptionProp & {
    type?: TextInputMaskTypeProp;
  };
}

export interface InputStyleProps {
  error: boolean;
}

export type CustomFocusNameRef = {
  focusName: (focusName: string) => void;
};

export type CustomInputRef = CustomFocusNameRef & TextInput & TextInputMask;
