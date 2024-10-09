import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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
`;

export const ValueLabel = styled(Text)`
  margin-right: ${RFValue(8)}px;
`;

export const ChangeText = styled(Text).attrs({
  fontWeight: 'bold',
})<ChangeTextProps>`
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(18)}px;
`;
