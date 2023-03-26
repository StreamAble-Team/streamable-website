import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  overflow: hidden;
`;

export const LeftContainer = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  & > img {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }
`;

export const RightContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text.primary};
  text-transform: uppercase;
`;

export const SubText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.offWhite};
`;

export const Button = styled(Link)`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.base.mainColor};
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
