import theme from '@theme';
import {StyleSheet} from 'react-native';
import {styled} from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
  },
})`
  background-color: #1a2c38;
  flex: 1;
  overflow: scroll;
`;

export const styles = StyleSheet.create({
  card: {
    paddingLeft: 22,
    paddingBottom: 13,
    gap: 2,
  },
  title: {
    color: theme.colors.title,
    fontSize: 17,
    fontFamily: theme.fontFamily.bold,
  },
  subtitle: {
    color: theme.colors.subtitle,
    fontSize: 14,
  },
});
