import styled from 'styled-components/native';
import theme from '@theme';
import {StyleSheet} from 'react-native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})`
  background-color: #1a2c38;
  flex: 1;
  overflow: scroll;
`;

export const styles = StyleSheet.create({
  title: {
    color: theme.colors.buttonBackground,
    fontFamily: theme.fontFamily.bold,
    fontSize: 17,
    justifyContent: 'flex-start',
    marginTop: 25,
    marginBottom: 10,
  },
  topmenu: {
    flexDirection: 'row',
    gap: 200,
    alignItems: 'center',
    margin: 25,
  },
  image: {
    width: 70,
    height: 26,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});
