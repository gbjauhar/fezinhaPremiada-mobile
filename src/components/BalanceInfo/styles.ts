import {Text} from '@components/Text';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 ${RFValue(24)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ValueContainer = styled.View`
  width: 45%;
`;

export const ValueInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoText = styled(Text)`
  margin-left: 8px;
  font-family: ${({theme}) => theme.fontFamily.regular};
  color: ${({theme}) => theme.colors.subtitle};
  font-size: ${RFValue(16)}px;
`;

export const Value = styled(Text)`
  font-family: ${({theme}) => theme.fontFamily.bold};
  color: ${({theme}) => theme.colors.subtitle};
  font-size: ${RFValue(18)}px;

  margin-top: ${RFValue(8)}px;
`;

export const PrimaryButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: ${RFValue(8)}px ${RFValue(12)}px;
  background-color: ${({theme}) => theme.colors.buttonBackground};
  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(8)}px;
  margin-top: ${RFValue(16)}px;
`;

export const PrimaryButtonText = styled(Text)`
  font-family: ${({theme}) => theme.fontFamily.bold};
  color: ${({theme}) => theme.colors.buttonTitle};
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: ${RFValue(8)}px ${RFValue(20)}px;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({theme}) => theme.colors.white};
  border-radius: ${RFValue(8)}px;
  margin-top: ${RFValue(16)}px;
`;

export const ButtonText = styled(Text)`
  font-family: ${({theme}) => theme.fontFamily.bold};
  color: ${({theme}) => theme.colors.subtitle};
  font-size: ${RFValue(16)}px;
`;
