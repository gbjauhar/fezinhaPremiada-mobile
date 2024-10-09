import theme from '@theme';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {},
  showsHorizontalScrollIndicator: false,
})`
  margin: 0 0 0 20px;
  background-color: #1a2c38;
  flex: 1;
  overflow: scroll;
`;
export const styles = StyleSheet.create({
  text: {
    color: theme.colors.subtitle,
    textAlign: 'center',
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: theme.colors.cardBackground,
    borderColor: theme.colors.cardBorder,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 7,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginRight: 10,
  },
});
