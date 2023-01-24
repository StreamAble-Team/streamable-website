import React from "react";
import {
  BottomBottomContainer,
  BottomContainer,
  Container,
  ControlsContainer,
  MiddleContainer,
  PlayWrapper,
  Wrapper,
} from "./Controls.styles";
import VideoFullscreen from "./FullScreen";
import VideoPlayButton from "./PlayButton";
import VideoSlider from "./Slider";
import VideoTimeStamps from "./Time";
import TopControls from "./Top";
import VideoVolume from "./Volume";

const VideoControls = ({ title, subTitle }) => {
  return (
    <ControlsContainer>
      <Wrapper>
        <TopControls title={title} subTitle={subTitle} />
        <BottomContainer>
          <VideoSlider />
          <BottomBottomContainer>
            <PlayWrapper>
              <VideoPlayButton />
              <VideoVolume />
              <VideoTimeStamps />
            </PlayWrapper>
            <VideoFullscreen />
          </BottomBottomContainer>
        </BottomContainer>
      </Wrapper>
    </ControlsContainer>
  );
};

export default VideoControls;
