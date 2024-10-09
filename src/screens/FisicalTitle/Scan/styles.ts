import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {PrimaryButton} from '@components/PrimaryButton';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from '@components/Text';
import {FlatList, StyleSheet} from 'react-native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: RFValue(24),
  },
})`
  flex: 1;

  padding: 0 ${RFValue(24)}px;
`;

export const Button = styled(PrimaryButton).attrs(({theme}) => ({
  textProps: {
    fontWeight: 'regular',
    style: {
      color: theme.colors.icons,
      fontSize: RFValue(16),
    },
  },
}))`
  background-color: ${({theme}) => theme.colors.cardBackground};
  border: 1px solid ${({theme}) => theme.colors.icons};

  padding: ${RFValue(10)}px;

  margin-bottom: 24px;
`;

export const CheckIcon = styled(FontAwesome5Icon).attrs({
  name: 'check-circle',
})`
  color: ${({theme}) => theme.colors.icons};
  font-size: ${RFValue(16)}px;
  margin-right: ${RFValue(8)}px;
`;

export const ScanButton = styled(PrimaryButton).attrs(({theme}) => ({
  textProps: {
    fontWeight: 'regular',
    style: {
      color: theme.colors.icons,
      fontSize: RFValue(16),
      textAlign: 'center',
    },
  },
}))`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${RFValue(8)}px;
  background-color: ${({theme}) => theme.colors.cardBackground};
  border: 1px solid ${({theme}) => theme.colors.icons};
  width: 48%;

  padding: ${RFValue(10)}px;

  margin-top: ${RFValue(16)}px;
`;

export const ScanIcon = styled(Ionicons).attrs({
  name: 'scan-circle-outline',
})`
  color: ${({theme}) => theme.colors.icons};
  font-size: ${RFValue(40)}px;
  margin-right: ${RFValue(4)}px;
  top: ${RFValue(1)}px;
`;

export const MultiScanIcon = styled(Ionicons).attrs({
  name: 'scan-circle-sharp',
})`
  color: ${({theme}) => theme.colors.icons};
  font-size: ${RFValue(40)}px;
  margin-right: ${RFValue(4)}px;
  top: ${RFValue(1)}px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  width: 100%;

  align-items: center;
  justify-content: space-between;

  margin-bottom: ${RFValue(16)}px;
`;

export const Main = styled.FlatList`` as unknown as typeof FlatList;

export const Title = styled(Text).attrs({
  fontWeight: 'bold',
})`
  margin-bottom: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const styles = StyleSheet.create({
  input: {
    marginTop: 7,
    height: '20%',
  },
});
