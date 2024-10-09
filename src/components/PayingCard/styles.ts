import theme from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  card: {
    backgroundColor: theme.colors.cardBackground,
    width: 327,
    height: 69,
    borderColor: theme.colors.cardBorder,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 7,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  title: {
    color: theme.colors.title,
    fontSize: 17,
    fontFamily: theme.fontFamily.bold,
  },
  subtitle: {
    color: theme.colors.subtitle,
    fontSize: 12,
    fontFamily: theme.fontFamily.regular,
  },
  image: {
    width: 28,
    height: 36,
  },
  left: {
    flexDirection: 'row',
    gap: 16,
  },
});
