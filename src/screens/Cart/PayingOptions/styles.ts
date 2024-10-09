import theme from '@theme';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

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
    color: theme.colors.title,
    fontFamily: theme.fontFamily.bold,
    fontSize: 19,
  },
  subtitle: {
    color: theme.colors.subtitle,
    fontFamily: theme.fontFamily.regular,
    fontSize: 16,
  },
  subtitleBold: {
    color: theme.colors.subtitle,
    fontSize: 16,
    fontFamily: theme.fontFamily.bold,
  },
  topMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 32,
    gap: 105,
    text: {
      color: theme.colors.subtitle,
      fontFamily: theme.fontFamily.semiBold,
      fontSize: 19,
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 16,
  },
  footer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 24,
    paddingRight: 24,
    alignItems: 'center',
    backgroundColor: theme.colors.cardBackground,
    title: {
      color: theme.colors.title,
      fontSize: 16,
      fontFamily: theme.fontFamily.bold,
    },
    subtitle: {
      color: theme.colors.link,
      fontSize: 24,
      fontFamily: theme.fontFamily.bold,
    },
  },
});
