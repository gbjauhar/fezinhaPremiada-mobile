import styled from 'styled-components/native';

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

export const Title = styled.Text`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  color: #ffce36;
  margin: 10% 0 2%;
`;

export const Subtitle = styled.Text`
  width: 60%;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;

export const Image = styled.Image`
  width: 70px;
  height: 90px;
  margin-top: 40px;
`;
