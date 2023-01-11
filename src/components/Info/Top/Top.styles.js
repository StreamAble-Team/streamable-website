import { FaShare, FaShareAlt, FaStar } from "react-icons/fa";
import styled from "styled-components";

export const InfoTopContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  padding-top: 1.5rem;
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
`;

export const LeftContainer = styled.div`
  width: 20%;
`;

export const RightContainer = styled.div`
  width: 80%;
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
  border-radius: 0.5rem;
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
  border-radius: 1rem;
  overflow: hidden;
  border: 10px solid ${({ theme }) => theme.base.navBg};
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const Button = styled.button`
display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 45px;
  padding: 0 1.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme, main }) =>
    main ? theme.base.mainColor : theme.base.navBg}};
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const ShareIcon = styled(FaShareAlt)`
  font-size: 1.3rem;
  margin-top: 2px;
  margin-right: 0.25rem;
`;
