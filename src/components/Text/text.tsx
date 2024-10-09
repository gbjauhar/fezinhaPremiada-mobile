import React from 'react';
import {TextItem} from './text.styles';
import {TextProps} from './text.props';

export const Text = (props: TextProps) => {
  return <TextItem {...props} />;
};
