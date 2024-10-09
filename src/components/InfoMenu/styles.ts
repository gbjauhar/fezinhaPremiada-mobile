import theme from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    gap: 5,
    width: '40%',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.subtitle,
    fontSize: 14,
  },
  value: {
    fontSize: 22,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.subtitle,
  },
  input: {
    minHeight: 45,
    width: 330,
    paddingLeft: 16,
    backgroundColor: theme.colors.subtitle,
    borderRadius: 7,
  },
  button: {
    width: '100%',
    height: 38,
    backgroundColor: theme.colors.buttonBackground,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.colors.buttonText,
    fontSize: 16,
    fontFamily: theme.fontFamily.bold,
  },
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    marginTop: 32,
    color: theme.colors.subtitle,
    textAlign: 'center',
  },
  valueContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
