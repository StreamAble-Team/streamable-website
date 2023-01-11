import styled from "styled-components";

export const EpisodesContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

export const EpisodesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  justify-items: space-between;
  align-content: space-between;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.primary};
`;
