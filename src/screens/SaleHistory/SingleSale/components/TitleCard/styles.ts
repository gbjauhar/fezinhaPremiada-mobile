import {Text} from '@components/Text';
import {FlatList, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

export const Container = styled.View`
  width: 100%;
  border-radius: ${RFValue(14)}px;
  align-items: center;
  justify-content: center;
`;

export const Dozens = styled.FlatList.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  columnWrapperStyle: {marginTop: RFValue(14)},
})`
  background-color: ${({theme}) => theme.colors.cardBackground};
  border-radius: ${RFValue(14)}px;
  border-top-left-radius: 0;
  width: 100%;
  bottom: 9%;

  padding: ${RFValue(8)}px 0;

  border: 1px solid ${({theme}) => theme.colors.cardBorder};
  border-top-width: 0;
` as unknown as typeof FlatList;

export const DozenContainer = styled(LinearGradient)`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(55) / 2}px;
  border: 2px solid ${({theme}) => theme.colors.dozensBorder};

  margin: 0 ${RFValue(4)}px;
`;

export const Dozen = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(20)}px;
`;
