import React from "react";
import { SubtitleText } from "./Subtitle.styles";

const VideoSubtitle = ({ subtitleHtml }) => {
  console.log(subtitleHtml);
  if (!subtitleHtml) return null;
  return <SubtitleText dangerouslySetInnerHTML={{ __html: subtitleHtml }} />;
};

export default VideoSubtitle;
