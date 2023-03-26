import Image from "next/image";
import Link from "next/link";
import { FaShare, FaShareAlt, FaStar } from "react-icons/fa";
import styled from "styled-components";

export const InfoTopContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  z-index: 0;
`;

export const Img = styled(Image)`
  grid-area: 1/1/1/1;
  object-fit: cover;
  object-position: center;
  height: 550px;
  width: calc(100% - 8px);
`;

export const Fade = styled.div`
  grid-area: 1/1/1/1;

  background: ${({ theme }) => `
  linear-gradient(0deg, ${theme.base.bg}, rgba(23,24,28,.6))`};
  height: 550px;
  width: calc(100% - 8px);
`;

export const Wrapper = styled.div`
  grid-area: 1/1/1/1;
  height: 550px;
  width: calc(100% - 8px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 100px 40px 0;
  z-index: 2;
  @media (max-width: 768px) {
    padding: 100px 2rem;
  }
`;

export const Logo = styled(Image)`
  height: 150px;
  padding-bottom: 20px;
  object-fit: contain;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 0 20px;
`;

export const EnglishTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: bolder;
  padding: 0;
  margin: 0;
  max-lines: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const MetaInfoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  // margin-bottom: 20px;
`;

export const MetaInfoItem = styled.div`
  color: ${({ theme }) => theme.text.primary};
  background-color: ${({ theme }) => theme.base.navBg};
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  &:hover {
    background-color: ${({ theme, clickable }) =>
      clickable && theme.base.mainColor};
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  width: 50vw;
  text-align: start;
  color: #d7d7d7;
  margin: 0;
  padding-top: 1.5rem;
  max-lines: 6;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
