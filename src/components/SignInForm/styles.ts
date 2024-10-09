import theme from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    minHeight: 45,
    width: 330,
    paddingLeft: 16,
    backgroundColor: theme.colors.subtitle,
    borderRadius: 7,
    color: theme.colors.titleDark,
  },
  button: {
    width: 327,
    height: 50,
    backgroundColor: theme.colors.buttonBackground,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.colors.buttonText,
    fontSize: 19,
    fontFamily: theme.fontFamily.bold,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  text: {
    marginTop: 32,
    color: theme.colors.subtitle,
    textAlign: 'center',
  },
  required: {
    alignItems: 'flex-start',
    color: theme.colors.status.required,
    marginBottom: 10,
  },
  link: {
    color: theme.colors.link,
    textDecorationLine: 'underline',
  },
  conditions: {
    position: 'relative',
    bottom: 0,
    marginTop: 70,
    color: theme.colors.link,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
