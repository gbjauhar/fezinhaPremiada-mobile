import React, {ReactNode} from 'react';

import {Modalize, ModalizeProps} from 'react-native-modalize';
import {Container, Header, Title, Body, Footer} from './styles';

interface BottomModalProps extends ModalizeProps {
  title: string;
  body?: ReactNode;
  footer?: ReactNode;
}

const BottomModalComponent: React.ForwardRefRenderFunction<
  Modalize,
  BottomModalProps
> = ({title, body, footer, ...rest}, ref) => {
  return (
    <Container ref={ref} panGestureEnabled adjustToContentHeight {...rest}>
      <Header>
        <Title>{title}</Title>
      </Header>

      <Body>{body}</Body>

      <Footer>{footer}</Footer>
    </Container>
  );
};

export const BottomModal = React.forwardRef(BottomModalComponent);
