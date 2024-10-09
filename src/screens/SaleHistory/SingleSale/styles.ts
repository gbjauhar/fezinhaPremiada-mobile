import theme from '@theme';
import {StyleSheet} from 'react-native';
import {styled} from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})`
  background-color: #1a2c38;
  flex: 1;
  overflow: scroll;
`;

export const styles = StyleSheet.create({
  text: {
    flexDirection: 'column',
    gap: 5,
  },

  title: {
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.title,
    fontSize: 16,
  },

  image: {
    width: 28,
    height: 36,
  },

  whatsappButton: {
    backgroundColor: theme.colors.green,
    gap: 5,
    text: {
      color: theme.colors.white,
    },
  },
  shareButton: {
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    gap: 5,
    width: '100%',
    text: {
      color: theme.colors.white,
    },
  },
  links: {
    width: '90%',
    gap: 10,
  },
});
