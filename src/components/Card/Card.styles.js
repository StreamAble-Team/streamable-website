import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

export const TopContainer = styled.div`
  width: 100%;
  height: 71%;
  transition: all 0.3s ease-in-out;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 31%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.25rem;
  padding: 0.5rem;
`;

export const ImageContainer = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Genres = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Genre = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.offWhite};
  margin-right: 0.5rem;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const RatingIcon = styled(FaStar)`
  font-size: 1rem;
  color: ${({ theme }) => theme.base.mainColor};
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Rating = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text.primary};
  margin-right: 0.5rem;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const CardContainer = styled(Link)`
  width: 200px;
  height: 350px;
  overflow: hidden;
  border-radius: 0.5rem;
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: ${({ theme }) => theme.base.navBg};
  &:hover {
    box-shadow: 0 0 0.3rem 0.3rem ${({ theme }) => theme.base.navBg};
  }
  &:hover ${TopContainer} {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 150px;
    height: 310px;
  }
`;
