import styled from 'styled-components';

export const Container = styled.header`
  background: ${props => props.theme.backgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 10px;
  justify-content: space-between;

  button {
    font-size: 16px;
    cursor: pointer;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
