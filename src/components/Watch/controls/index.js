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
import SkipButton from "./SkipButton";
import VideoSlider from "./Slider";
import VideoTitle from "./Title";
import VideoVolume from "./Volume";

const VideoControls = (props) => {
  const { showSubtitles, setShowSubtitles, skipTimes } = props;
  return (
    <VideoControlsWrapper>
      <VideoControlsContainer>
        <SkipButton skipTimes={skipTimes} />
        <VideoSlider skipTimes={skipTimes} />
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
