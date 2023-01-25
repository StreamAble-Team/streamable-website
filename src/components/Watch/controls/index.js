import React from "react";
import {
  BottomContainer,
  MediaButtons,
  PlayPauseWrapper,
  VideoControlsContainer,
} from "./controls.slider";
import VideoFullscreenButton from "./Fullscreen";
import VideoPlayButton from "./PlayButton";
import VideoSlider from "./Slider";
import VideoTitle from "./Title";
import VideoVolume from "./Volume";

const VideoControls = (props) => {
  return (
    <VideoControlsContainer>
      <VideoSlider />
      <BottomContainer>
        <PlayPauseWrapper>
          <VideoPlayButton />
          <VideoVolume />
        </PlayPauseWrapper>
        <VideoTitle {...props} />
        <MediaButtons>
          <VideoFullscreenButton />
        </MediaButtons>
      </BottomContainer>
    </VideoControlsContainer>
  );
};

export default VideoControls;
