import styled from 'styled-components';

export const Wrapper = styled.View`
  flex-direction: row-reverse;
  padding: 16px 24px;
  background-color: #ffffff;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Item = styled.View`
  flex: 1;
`;

export const Touch = styled.TouchableOpacity`
  width: 100px;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.danger};
`;

export const Title = styled.Text``;
