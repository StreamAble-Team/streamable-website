import Link from "next/link";
import { rgba } from "polished";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: Column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2.3rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.primary};
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const SubText = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.offWhite};
  margin: 0.3rem 0;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
    text-align: center;
    font-size: 0.9rem;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.text.offWhite};
  margin: 1rem 0;
`;

export const DonateMethods = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const DonateMethod = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const DonateMethodTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.primary};
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const DonateMethodLink = styled.p`
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.primary};
  background-color: ${({ theme }) => rgba(theme.text.secondary, 0.5)};
  padding: 0.5rem 1rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ActualLink = styled(Link)`
  color: ${({ theme }) => theme.text.primary};
  text-decoration: underline;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
