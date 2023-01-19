import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

export const VideoContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.base.navBg};
`;

export const TopContainer = styled.div`
  position: relative;
  width: 100%;
  height: 540px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
  @media (min-width: 1400px) {
    height: 600px;
  }
  @media (min-width: 1600px) {
    height: 720px;
  }
`;

export const EpisodesContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
