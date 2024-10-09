import styled from 'styled-components/native';
import theme from '@theme';
import {StyleSheet} from 'react-native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})`
  overflow: scroll;
`;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a2c38',
    flex: 1,
  },
  title: {
    color: theme.colors.subtitle,
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 19,
  },
  topMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 45,
    gap: 100,
  },

  footer: {
    padding: 24,
    width: '100%',
    backgroundColor: theme.colors.cardBackground,
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    title: {
      color: theme.colors.subtitle,
      fontSize: 16,
      fontFamily: theme.fontFamily.regular,
    },
    subtitle: {
      color: theme.colors.title,
      fontSize: 24,
      fontFamily: theme.fontFamily.bold,
    },
  },
  button: {
    width: 199,
    height: 50,
    backgroundColor: theme.colors.buttonBackground,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    text: {
      color: theme.colors.buttonText,
      fontSize: 19,
      fontFamily: theme.fontFamily.bold,
    },
  },
  icon: {
    backgroundColor: '#FFDBD2',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
