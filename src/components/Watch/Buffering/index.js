import React from "react";
import {
  MediaBufferingContainer,
  MediaBufferingIcon,
  MediaBufferingTrack,
  MediaBufferingTrackFill,
} from "./Buffering.styles";

const VideoBuffering = () => {
  return (
    <MediaBufferingContainer>
      <MediaBufferingIcon fill="none" viewBox="0 0 120 120" aria-hidden="true">
        <MediaBufferingTrack
          className="media-buffering-track"
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          strokeWidth="8"
        ></MediaBufferingTrack>
        <MediaBufferingTrackFill
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          strokeWidth="10"
          pathLength="100"
        ></MediaBufferingTrackFill>
      </MediaBufferingIcon>
    </MediaBufferingContainer>
  );
};

export default VideoBuffering;
