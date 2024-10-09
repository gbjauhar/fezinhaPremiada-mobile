import theme from '@theme';
import {StyleSheet} from 'react-native';
import {styled} from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})`
  background-color: #1a2c38;
  flex: 1;
  overflow: scroll;
`;

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingLeft: 22,
    paddingBottom: 20,
    width: '100%',
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 19,
    color: theme.colors.title,
  },
  subtitle: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 16,
    color: theme.colors.subtitle,
  },
});
