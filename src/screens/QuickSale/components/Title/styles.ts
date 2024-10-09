import {Text} from '@components/Text';
import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

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
  width: 100%;

  padding: ${RFValue(20)}px ${RFValue(20)}px;

  border: 1px solid ${({theme}) => theme.colors.cardBorder};
` as unknown as typeof FlatList;

export const Title = styled(Text).attrs({
  fontWeight: 'bold',
})`
  text-align: center;
  font-size: ${RFValue(14)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const DozenContainer = styled(LinearGradient)`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(55) / 2}px;
  border: 2px solid ${({theme}) => theme.colors.dozensBorder};

  margin: 0 ${RFValue(8)}px;
`;

export const Dozen = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(20)}px;
`;
