import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import theme from '@theme';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})`
  background-color: #1a2c38;
  flex: 1;
  overflow: scroll;
  padding: 0 15px;
`;

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    margin: 15,
  },
  input: {
    height: RFValue(50),
    marginTop: '2%',
    marginBottom: '2%',
  },
  wholeInput: {
    backgroundColor: theme.colors.input,
    color: theme.colors.titleDark,
    borderWidth: RFValue(1),
    width: '100%',
    padding: RFValue(16),
    minHeight: RFValue(56),
    height: RFValue(60),
    marginTop: '5%',
    marginBottom: '2%',
    borderRadius: RFValue(8),
  },
});
