import React from 'react';
import {
  Modal,
  Container,
  Title,
  Overlay,
  Header,
  Body,
  Description,
  Footer,
  ConfirmButton,
  CancelButton,
  Separator,
} from './styles';
import {ModalProps} from 'react-native';

export interface IAlertModalInfo {
  visible?: boolean;
  title: string;
  description: string;
  buttonText: string;
  cancelText?: string;
  onCancel?: () => void;
  onConfirm: () => void;
  error?: boolean;
}

export interface AlertModalProps extends ModalProps, IAlertModalInfo {}

export const AlertModal = ({
  title,
  description,
  buttonText,
  onConfirm,
  cancelText,
  onCancel,
  error = false,
  ...rest
}: AlertModalProps) => {
  return (
    <Modal transparent {...rest}>
      <Overlay>
        <Container>
          <Header>
            <Title error={error}>{title}</Title>
          </Header>

          <Body>
            <Description>{description}</Description>
          </Body>

          <Footer>
            {cancelText && (
              <>
                <CancelButton onPress={onCancel}>{cancelText}</CancelButton>

                <Separator />
              </>
            )}
            <ConfirmButton onPress={onConfirm}>{buttonText}</ConfirmButton>
          </Footer>
        </Container>
      </Overlay>
    </Modal>
  );
};
