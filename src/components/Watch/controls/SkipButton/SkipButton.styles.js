import { styled } from "styled-components";

export const SkipButtonContainer = styled.div`
  padding: 8px 16px;
  margin: 15px 24px;
  background-color: ${({ theme }) => theme.base.mainColor};
  color: ${({ theme }) => theme.base.textColor};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
