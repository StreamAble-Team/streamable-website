import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const ImageContainer = styled(Image)`
  width: 100%;
  height: 60%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 40%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.1rem;
`;

export const Title = styled.h3`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.primary};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const SubTitle = styled.p`
  width: 100%;
  font-size: 0.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.secondary};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Container = styled(Link)`
  max-width: 250px;
  height: 200px;
  background-color: ${({ theme }) => theme.base.navBg};
  border: ${({ active, theme }) =>
    !active ? "none" : `3px solid ${theme.base.mainColor}`};
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
    box-shadow: 0 0 0.25rem 0.25rem ${({ theme }) => theme.base.navBg};
  }
  &:hover ${ImageContainer} {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    height: 250px;
    max-height: 250px;
  }
`;
