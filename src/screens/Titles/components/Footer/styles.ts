import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

import CogImg from '../../../../assets/cog.svg';

interface OptionProps {
  green?: boolean;
  width?: string;
}

interface ChangeTextProps {
  green?: boolean;
}

export const Container = styled.View`
  width: 100%;
  padding: ${RFValue(24)}px;

  position: absolute;
  bottom: 0;

  background-color: ${({theme}) => theme.colors.background};
`;

export const Options = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${RFValue(16)}px;
`;

export const Option = styled.TouchableOpacity<OptionProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  border: 1px solid
    ${({theme, green}) => (green ? theme.colors.green : theme.colors.white)};
  border-radius: ${RFValue(8)}px;

  width: ${({width}) => width || 'auto'};
`;

export const ChangeIcon = styled(Feather).attrs({
  name: 'refresh-ccw',
})`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.subtitle};
  top: 1%;
  margin-right: ${RFValue(6)}px;
`;

export const ChangeText = styled(Text).attrs({
  fontWeight: 'bold',
})<ChangeTextProps>`
  color: ${({theme, green}) =>
    green ? theme.colors.green : theme.colors.white};
  font-size: ${RFValue(18)}px;
`;

export const CheckIcon = styled(Ionicons).attrs({
  name: 'checkmark-circle',
})`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.green};
  top: 1%;
  margin-right: ${RFValue(6)}px;
`;

export const CogIcon = styled(CogImg).attrs({
  width: RFValue(24),
  height: RFValue(24),
})`
  color: ${({theme}) => theme.colors.subtitle};
`;
