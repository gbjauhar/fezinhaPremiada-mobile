import theme from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.cardBackground,
    width: '90%',
    borderRadius: 14,
    padding: 12,
    marginBottom: 7,
  },
  text: {
    flexDirection: 'column',
    gap: 5,
  },

  title: {
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.title,
    fontSize: 16,
  },
});
