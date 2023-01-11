import React from "react";
import Episode from "./Episode/inedx";
import {
  EpisodesContainer,
  EpisodesList,
  Title,
  TitleContainer,
} from "./Episodes.styles";

const Episodes = ({ episodes, cover }) => {
  if (!episodes) return null;
  if (!episodes.length) return null;
  return (
    <EpisodesContainer>
      <TitleContainer>
        <Title>Episodes</Title>
      </TitleContainer>
      <EpisodesList>
        {episodes.map((episode) => (
          <Episode key={episode.id} {...episode} backupImage={cover} />
        ))}
      </EpisodesList>
    </EpisodesContainer>
  );
};

export default Episodes;
