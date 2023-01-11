import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";

export const Container = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  // padding: 0 1rem;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  border: 8px solid ${({ theme }) => theme.base.navBg};
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  & img {
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    border: 4px solid ${({ theme }) => theme.base.navBg};
  }
`;

export const Icon = styled(FaArrowDown)`
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;
