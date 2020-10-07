import styled from 'styled-components';

export const Wrapper = styled.View`
  flex: 1;
  padding-top: 64px;
`;

export const Button = styled.TouchableOpacity`
  background: royalblue;
  width: 250px;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin: 16px;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.4);
`;

export const Label = styled.Text`
  font-size: 16px;
  color: lightblue;
`;

export const Number = styled.Text`
  font-size: 32px;
  color: lightblue;
  align-self: center;
  margin: 16px;
`;
