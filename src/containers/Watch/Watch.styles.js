import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const VideoContainer = styled.div`
  width: 70%;
  // height: 500px;
  aspect-ratio: 16 / 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.base.navBg};
`;

export const EpisodesContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
