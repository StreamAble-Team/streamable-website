import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";

export const Container = styled.div`
  height: 60px;
  width: 100px;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.base.navBg};
  display: flex;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  & img {
    border-radius: 0.25rem;
    width: 60%;
    height: 60%;
    object-fit: cover;
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
