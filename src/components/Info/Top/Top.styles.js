import { FaStar } from "react-icons/fa";
import styled from "styled-components";

export const InfoTopContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;

export const LeftContainer = styled.div`
  width: 80%;
`;

export const RightContainer = styled.div`
  width: 20%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.3rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.primary};
  transition: color 0.2s ease-in-out;
  max-width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const MetaInfoItem = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.text.primary};
  background-color: ${({ theme }) => theme.base.navBg};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`;

export const RatingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Rating = styled.span`
  font-weight: 700;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.text.primary};
`;

export const RatingIcon = styled(FaStar)`
  font-size: 2.3rem;
  color: ${({ theme }) => theme.base.mainColor};
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text.offWhite};
  margin-top: 1.5rem;
  line-height: 1.6;
  max-width: 100%;
  height: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.base.navBg};
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
