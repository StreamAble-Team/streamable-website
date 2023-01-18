import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 2.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Arrows = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Arrow = styled.button`
  background: ${({ theme }) => theme.base.navBg};
  border: none;
  padding: 0.6rem 1rem;
  cursor: pointer;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftArrow = styled(FaArrowLeft)``;

export const RightArrow = styled(FaArrowRight)``;
