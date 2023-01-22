import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 2rem;
  &::before {
    left: 0;
    right: 0;
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    aspect-ratio: 12 /1;
    z-index: 1;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75), transparent);
  }
`;
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const AnimeTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:first-letter {
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const EpisodeTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: #dbdbdb;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`;
