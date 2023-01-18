import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.base.navBg};
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0 2rem;
  height: 100%;
  flex: 1;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.5rem;
  font-weight: 600;
  &::placeholder {
    color: ${({ theme }) => theme.text.secondary};
  }
  &:active,
  &:focus {
    padding-left: calc(2rem - 2px);
    padding-right: calc(2rem - 2px);
    border: 2px solid ${({ theme }) => theme.base.mainColor};
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
    font-size: 1.3rem;
    &:active,
    &:focus {
      padding-left: calc(1rem - 2px);
      padding-right: calc(1rem - 2px);
      border: 2px solid ${({ theme }) => theme.base.mainColor};
    }
  }
`;
