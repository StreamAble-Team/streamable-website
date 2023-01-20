import Image from "next/image";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

export const TopContainer = styled.div`
  width: 100%;
  height: 53%;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 60%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const ImageContainer = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h3`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.primary};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Genres = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Genre = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text.secondary};
  margin-right: 0.5rem;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const RatingContainer = styled.div`
  margin-top: 0.3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`;

export const RatingIcon = styled(FaStar)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.base.mainColor};
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Rating = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text.primary};
  margin-right: 0.5rem;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const BoxCardContainer = styled.div`
  width: 330px;
  height: 270px;
  background-color: ${({ theme }) => theme.base.navBg};
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0 0 0.3rem 0.3rem ${({ theme }) => theme.base.navBg};
  }
  &:hover ${TopContainer} {
    transform: scale(1.05);
  }
  @media (max-width: 1700px) {
    width: 300px;
    height: 250px;
  }
`;
