import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  padding: ${RFValue(16)}px ${RFValue(24)}px ${RFValue(14)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ArrowLeft = styled(FontAwesome5Icon).attrs({
  name: 'chevron-left',
})`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.subtitle};
`;

export const Options = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Cart = styled(Feather).attrs({
  name: 'shopping-cart',
})`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.subtitle};
`;

export const OptionButton = styled.TouchableOpacity`
  padding: ${RFValue(14)}px;
`;

export const Share = styled(Ionicons).attrs({
  name: 'arrow-redo-outline',
})`
  font-size: ${RFValue(24)}px;
  margin-left: ${RFValue(8)}px;
  color: ${({theme}) => theme.colors.subtitle};
`;
