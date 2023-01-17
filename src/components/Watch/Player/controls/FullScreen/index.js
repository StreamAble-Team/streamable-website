import React from "react";
import {
  Container,
  MediaEnterFullscreen,
  MediaExitFullscreen,
} from "./FullScreen.styles";
import { FullscreenButton } from "@vidstack/player-react";

const VideoFullscreen = () => {
  return (
    <Container>
      <FullscreenButton>
        <MediaEnterFullscreen />
        <MediaExitFullscreen />
      </FullscreenButton>
    </Container>
  );
};

export default VideoFullscreen;
