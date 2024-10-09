import theme from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 34,
    paddingLeft: 24,
    marginTop: 49,
    width: '100%',
    height: 180,
    backgroundColor: theme.colors.buttonBackground,
    gap: 4,
  },
  title: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 16,
    color: theme.colors.buttonText,
  },
  subtitle: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
    color: theme.colors.buttonText,
  },
  button: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.buttonText,
    borderRadius: 10,
    height: 40,
    width: 180,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    image: {
      height: 12,
      width: 15,
    },
    text: {
      fontFamily: theme.fontFamily.bold,
      fontSize: 16,
      color: theme.colors.buttonText,
      textAlign: 'center',
    },
  },
});
