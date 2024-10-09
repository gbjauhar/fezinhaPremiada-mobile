import theme from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    gap: 16,
    width: '90%',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    width: '100%',
  },
  firstCard: {
    width: '100%',
    backgroundColor: theme.colors.cardBackground,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.cardBorder,
    borderRadius: 14,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 12,
    title: {
      fontFamily: theme.fontFamily.semiBold,
      fontSize: 16,
      color: theme.colors.title,
    },
    subtitle: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 14,
      marginVertical: 10,
      color: theme.colors.subtitle,
    },
    button: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.colors.subtitle,
      borderRadius: 10,
      height: 40,
      width: 140,
      alignItems: 'center',
      justifyContent: 'center',
      text: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 16,
        color: theme.colors.subtitle,
      },
    },
  },
  secondCard: {
    width: '100%',
    backgroundColor: theme.colors.cardBackground,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.cardBorder,
    borderRadius: 14,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 12,
    title: {
      fontFamily: theme.fontFamily.semiBold,
      fontSize: 16,
      color: theme.colors.title,
    },
    subtitle: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 14,
      marginVertical: 10,
      color: theme.colors.subtitle,
    },
    button: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.colors.subtitle,
      borderRadius: 10,
      height: 40,
      width: 180,
      alignItems: 'center',
      justifyContent: 'center',
      text: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 16,
        color: theme.colors.subtitle,
        textAlign: 'center',
      },
    },
  },
});
