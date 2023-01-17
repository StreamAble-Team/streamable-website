import React from "react";
import { PlayButton } from "@vidstack/player-react";
import { Container, MediaPause, MediaPlay } from "./PlayButton.styles";

const VideoPlayButton = () => {
  return (
    <PlayButton>
      <Container>
        <MediaPlay />
        <MediaPause />
      </Container>
    </PlayButton>
  );
};

export default VideoPlayButton;
