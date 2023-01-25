import React from "react";
import { TitleContainer, VideoName } from "./Title.styles";

const VideoTitle = ({ title, subTitle }) => {
  return (
    <TitleContainer>
      <VideoName>
        {title} : {subTitle}
      </VideoName>
    </TitleContainer>
  );
};

export default VideoTitle;
