import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.base.navBg};
  border-radius: 0.5rem;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.5rem;
  font-weight: 600;
  &::placeholder {
    color: ${({ theme }) => theme.text.secondary};
  }
`;
