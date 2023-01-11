import React from "react";
import { Episodes, Player } from "../../components";
import { Container, EpisodesContainer, VideoContainer } from "./Watch.styles";

const WatchContainer = ({ data }) => {
  return (
    <Container>
      <VideoContainer>
        <Player data={data} />
      </VideoContainer>
      <EpisodesContainer>
        <Episodes {...data} />
      </EpisodesContainer>
    </Container>
  );
};

export default WatchContainer;
