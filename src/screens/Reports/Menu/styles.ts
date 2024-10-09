import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 0 ${RFValue(24)}px;
`;

export const Option = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: ${RFValue(16)}px;
  border: 1px solid ${({theme}) => theme.colors.icons};
  border-radius: ${RFValue(14)}px;
  justify-content: space-between;

  width: 48%;
  height: ${RFValue(120)}px;

  margin-bottom: ${RFValue(16)}px;
`;

export const Icon = styled(FontAwesome5Icon)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.icons};
`;

export const Title = styled(Text).attrs({
  fontWeight: 'bold',
})`
  color: ${({theme}) => theme.colors.icons};
  font-size: ${RFValue(16)}px;
`;
