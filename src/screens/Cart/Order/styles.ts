import theme from '@theme';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
})`
  overflow: scroll;
`;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a2c38',
    flexGrow: 1,
  },
  input: {
    minHeight: 45,
    width: 330,
    paddingLeft: 16,
    backgroundColor: theme.colors.subtitle,
    borderRadius: 7,
  },
  title: {
    color: theme.colors.title,
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 17,
  },
  subtitle: {
    color: theme.colors.subtitle,
    fontFamily: theme.fontFamily.regular,
    fontSize: 16,
  },
  value: {
    color: theme.colors.link,
    fontSize: 24,
    fontFamily: theme.fontFamily.bold,
  },
  topMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 32,
    gap: 105,
    paddingLeft: 18,
    text: {
      color: theme.colors.subtitle,
      fontFamily: theme.fontFamily.semiBold,
      fontSize: 19,
    },
  },
  main: {
    paddingLeft: 18,
  },
  footer: {
    width: '100%',
    height: 97,
    backgroundColor: theme.colors.cardBackground,
    padding: 24,
    marginTop: 2,
  },
  button: {
    width: 327,
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
  required: {
    color: theme.colors.status.required,
    marginBottom: 10,
  },
});
