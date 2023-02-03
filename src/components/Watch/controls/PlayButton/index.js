import { MediaPlayButton } from "@vidstack/react";
import React from "react";
import { PlayButtonWrapper } from "./PlayButton.styles";

const VideoPlayButton = () => {
  return (
    <PlayButtonWrapper>
      <MediaPlayButton />
    </PlayButtonWrapper>
  );
};

export default VideoPlayButton;
