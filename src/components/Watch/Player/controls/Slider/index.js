import { TimeSlider, useMediaState } from "@vidstack/react";
import React from "react";
import {
  Container,
  SliderThumb,
  SliderThumbContainer,
  SliderTrack,
  SliderTrackFill,
  SliderTrackFillBuffer,
  Wrapper,
} from "./Slider.styles";

const VideoSlider = () => {
  const { bufferedAmount, duration } = useMediaState();
  const total = duration;
  const buffered = (bufferedAmount / total) * 100;

  return (
    <Container>
      <Wrapper>
        <TimeSlider>
          <SliderTrack>
            <SliderTrackFill></SliderTrackFill>
            <SliderTrackFillBuffer
              bufferedAmount={buffered || 0}
            ></SliderTrackFillBuffer>
          </SliderTrack>
          <SliderThumbContainer>
            <SliderThumb></SliderThumb>
          </SliderThumbContainer>
        </TimeSlider>
      </Wrapper>
    </Container>
  );
};

export default VideoSlider;
