import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 1rem 2rem;
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: Column;
  align-items: flex-start;
  justify-content: center;
`;
export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};

  text-transform: uppercase;
`;

export const SubText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.offWhite};
  margin: 0.3rem 0;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-left: 0;
  display: flex;
  justify-content: space-between;

  & > img {
    width: 40%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
    }
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DownloadButton = styled(Link)`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.base.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  overflow: hidden;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 1rem;
`;
