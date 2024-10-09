import theme from '@theme';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
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
  padding: 0 15px;
`;
export const styles = StyleSheet.create({
  button: {
    width: '100%',
    margin: 15,
  },
  required: {
    alignItems: 'flex-start',
    color: theme.colors.status.required,
    marginBottom: 10,
  },
  input: {
    height: RFValue(50),
    marginTop: '2%',
    marginBottom: '2%',
  },
});
