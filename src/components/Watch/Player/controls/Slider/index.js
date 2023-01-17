import React from "react";
import {
  Container,
  SliderThumb,
  SliderThumbContainer,
  SliderTrack,
  SliderTrackFill,
  Wrapper,
} from "./Slider.styles";
import { TimeSlider } from "@vidstack/player-react";

const VideoSlider = () => {
  return (
    <Container>
      <Wrapper>
        <TimeSlider>
          <SliderTrack></SliderTrack>
          <SliderTrackFill></SliderTrackFill>
          <SliderThumbContainer>
            <SliderThumb></SliderThumb>
          </SliderThumbContainer>
        </TimeSlider>
      </Wrapper>
    </Container>
  );
};

export default VideoSlider;
