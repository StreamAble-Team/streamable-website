import React from "react";
import {
  BottomContainer,
  MediaButtons,
  PlayPauseWrapper,
  VideoControlsContainer,
  videoControlsWrapper,
} from "./controls.slider";
import VideoFullscreenButton from "./Fullscreen";
import VideoPlayButton from "./PlayButton";
import VideoSlider from "./Slider";
import VideoTitle from "./Title";
import VideoVolume from "./Volume";

const VideoControls = (props) => {
  return (
    <videoControlsWrapper>
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
    </videoControlsWrapper>
  );
};

export default VideoControls;
