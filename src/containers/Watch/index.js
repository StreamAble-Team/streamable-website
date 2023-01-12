import React from "react";
import { Episodes, Player, RightInfo } from "../../components";
import {
  Container,
  EpisodesContainer,
  TopContainer,
  VideoContainer,
} from "./Watch.styles";

const WatchContainer = ({ data }) => {
  if (!data) return null;

  console.log(data?.episodes);
  return (
    <Container>
      <TopContainer>
        <VideoContainer>
          <Player data={data} />
        </VideoContainer>
        <RightInfo {...data} />
      </TopContainer>
      <EpisodesContainer>
        <Episodes {...data} />
      </EpisodesContainer>
    </Container>
  );
};

export default WatchContainer;
