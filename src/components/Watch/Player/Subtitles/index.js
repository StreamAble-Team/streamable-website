import { useMediaContext } from "@vidstack/player-react";
import React, { useState } from "react";
import {
  Subtitle,
  SubtitlesContainer,
  SubtitlesWrapper,
} from "./Subtitles.styles";

const VideoSubtitles = ({ subtitleHtml }) => {
  if (!subtitleHtml) return null;
  return (
    <SubtitlesContainer>
      <SubtitlesWrapper>
        <Subtitle
          dangerouslySetInnerHTML={{ __html: subtitleHtml ? subtitleHtml : "" }}
        ></Subtitle>
      </SubtitlesWrapper>
    </SubtitlesContainer>
  );
};

export default VideoSubtitles;
