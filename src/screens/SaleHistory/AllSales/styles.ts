import theme from '@theme';
import {FlatList} from 'react-native';
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
`;

export const OptionsList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingRight: RFValue(16),
  },
})`
  margin-top: ${RFValue(8)}px;
` as unknown as typeof FlatList;

export const SecondOption = styled.View`
  width: 80px;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

export const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.cardBackground,
    width: '90%',
    borderRadius: 14,
    borderColor: theme.colors.cardBorder,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 12,
    margin: 7,
  },
  icons: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  up: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    flexDirection: 'column',
    gap: 10,
  },
  button: {
    width: '40%',
    marginTop: 15,
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 17,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  filterContainer: {
    paddingLeft: RFValue(24),
  },
  filterTitle: {
    marginBottom: '5%',
  },
  input: {
    width: '90%',
    backgroundColor: theme.colors.input,
    borderRadius: 5,
    marginTop: '5%',
    textAlign: 'center',
  },
});
