import theme from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.title,
    fontSize: 16,
  },
  titles: {
    marginTop: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
  },
  image: {
    width: 28,
    height: 36,
  },
  detail: {
    gap: 5,
    paddingTop: 7,
    paddingBottom: 10,
  },
  titleContainer: {
    width: '90%',
    marginTop: 15,
  },
  button: {
    width: '20%',
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  printButton: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
