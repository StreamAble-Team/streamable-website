import styled from "styled-components";
import Select from "react-select";
import { rgba } from "polished";

export const EpisodesContainer = styled.div`
  width: 100%;
  // margin-top: 1.5rem;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  @media (max-width: 1700px) {
    padding: 0 2rem;
  }
`;

export const EpisodesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1.5rem;
  justify-items: space-between;
  align-content: center;
  @media (max-width: 568px) {
    justify-items: center;
    align-content: center;
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.primary};
`;

export const EpisodeSelectContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  width: 100%;
  margin-bottom: 1rem;

  overflow: hidden;
  overflow-x: auto;
  //style overflow
  padding-bottom: 0.7rem;
  &::-webkit-scrollbar {
    height: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.base.navBg};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background: ${({ theme }) => rgba(theme.base.mainColor, 0.8)};
  }
`;

export const EpisodePill = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.4rem;
  border-radius: 0.25rem;
  background-color: ${({ theme, active }) =>
    active ? theme.base.mainColor : theme.base.navBg};
  color: ${({ theme }) => theme.text.primary};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.base.mainColor};
  }
`;

export const DropdownContainer = styled.div``;
