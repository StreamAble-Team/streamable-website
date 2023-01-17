import React from "react";
import { Container, MediaTime, Separator } from "./Time.styles";

const VideoTimeStamps = () => {
  return (
    <Container>
      <MediaTime type="current" className="timeDisplay" />
      <Separator>/</Separator>
      <MediaTime type="duration" className="timeDisplay" />
    </Container>
  );
};

export default VideoTimeStamps;
