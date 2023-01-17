import React from "react";
import { AnimeTitle, Container, EpisodeTitle, Wrapper } from "./Top.styles";

const TopControls = ({ title, subTitle }) => {
  return (
    <Container>
      <Wrapper>
        <AnimeTitle>{title}</AnimeTitle>
        <EpisodeTitle>{subTitle}</EpisodeTitle>
      </Wrapper>
    </Container>
  );
};

export default TopControls;
