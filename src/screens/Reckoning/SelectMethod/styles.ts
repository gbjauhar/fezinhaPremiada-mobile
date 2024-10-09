import {Text} from '@components/Text';
import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import Money from '../../../assets/money.svg';
import Pix from '../../../assets/pix.svg';

export const Container = styled.View`
  padding: 0 ${RFValue(24)}px;
`;

export const Title = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.title};
  max-width: ${RFValue(200)}px;
  margin-bottom: ${RFValue(24)}px;
`;

export const Description = styled(Text)`
  flex-direction: row;
  align-items: center;
  font-size: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Value = styled(Text).attrs({
  fontWeight: 'bold',
})`
  font-size: ${RFValue(16)}px;

  margin-left: ${RFValue(4)}px;
`;

export const Main = styled.FlatList`` as unknown as typeof FlatList;

export const Card = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: ${RFValue(12)}px ${RFValue(16)}px;
  background-color: ${({theme}) => theme.colors.cardBackground};
  border: 1px solid ${({theme}) => theme.colors.cardBorder};
  border-radius: ${RFValue(8)}px;

  margin-bottom: ${RFValue(16)}px;
`;

export const CardInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MoneyIcon = styled(Money).attrs({
  width: RFValue(32),
  height: RFValue(32),
})`
  color: ${({theme}) => theme.colors.title};
  margin-right: ${RFValue(16)}px;
`;

export const PixIcon = styled(Pix).attrs({
  width: RFValue(32),
  height: RFValue(32),
})`
  color: ${({theme}) => theme.colors.title};
  margin-right: ${RFValue(16)}px;
`;

export const DescriptionContainer = styled.View``;

export const CardTitle = styled(Text).attrs({
  fontWeight: 'bold',
})`
  color: ${({theme}) => theme.colors.title};
`;

export const CardDescription = styled(Text)`
  max-width: ${RFValue(200)}px;
  font-size: ${RFValue(12)}px;
`;

export const ArrowRight = styled(Feather)`
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(32)}px;
`;
