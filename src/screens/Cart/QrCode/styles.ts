import theme from '@theme';
import {Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
const {height} = Dimensions.get('window');

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
})`
  overflow: scroll;
`;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a2c38',
    flex: 1,
  },
  subtitle: {
    color: theme.colors.subtitle,
    fontFamily: theme.fontFamily.regular,
    fontSize: 16,
  },
  topMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 32,
    gap: 95,
    paddingLeft: 18,
    text: {
      color: theme.colors.subtitle,
      fontFamily: theme.fontFamily.semiBold,
      fontSize: 19,
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 24,
    paddingRight: 24,
  },
  footer: {
    width: '100%',
    height: 164,
    flexDirection: 'column',
    padding: 24,
    backgroundColor: theme.colors.cardBackground,
    gap: 15,
  },
  send: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.link,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    text: {
      color: theme.colors.subtitle,
      fontSize: 19,
      fontFamily: theme.fontFamily.bold,
    },
  },
  share: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.cardBackground,
    borderColor: theme.colors.subtitle,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    text: {
      color: theme.colors.subtitle,
      fontSize: 19,
      fontFamily: theme.fontFamily.bold,
    },
  },
});
