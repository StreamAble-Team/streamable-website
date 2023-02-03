import React from "react";
import VideoCaptionsButton from "./CaptionsButton";
import {
  BottomContainer,
  MediaButtons,
  PlayPauseWrapper,
  VideoControlsContainer,
  VideoControlsWrapper,
} from "./controls.slider";
import VideoFullscreenButton from "./Fullscreen";
import VideoPlayButton from "./PlayButton";
import VideoSlider from "./Slider";
import VideoTitle from "./Title";
import VideoVolume from "./Volume";

const VideoControls = (props) => {
  const { showSubtitles, setShowSubtitles } = props;
  return (
    <VideoControlsWrapper>
      <VideoControlsContainer>
        <VideoSlider />
        <BottomContainer>
          <PlayPauseWrapper>
            <VideoPlayButton />
            <VideoVolume />
          </PlayPauseWrapper>
          <VideoTitle {...props} />
          <MediaButtons>
            <VideoCaptionsButton
              showSubtitles={showSubtitles}
              setShowSubtitles={setShowSubtitles}
            />
            <VideoFullscreenButton />
          </MediaButtons>
        </BottomContainer>
      </VideoControlsContainer>
    </VideoControlsWrapper>
  );
};

export default VideoControls;
