import { FullscreenButton } from "@vidstack/react";
import React from "react";
import {
  Container,
  MediaEnterFullscreen,
  MediaExitFullscreen,
} from "./FullScreen.styles";

const VideoFullscreen = () => {
  return (
    <Container>
      <FullscreenButton>
        <MediaEnterFullscreen slot={"enter"} />
        <MediaExitFullscreen slot={"exit"} />
      </FullscreenButton>
    </Container>
  );
};

export default VideoFullscreen;
