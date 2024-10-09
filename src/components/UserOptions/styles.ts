import theme from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    width: '100%',
    gap: 2,
  },
  card: {
    backgroundColor: theme.colors.cardBackground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    padding: 10,
  },
  left: {
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontSize: 16,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});
