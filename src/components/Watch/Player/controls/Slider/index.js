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
import { TimeSlider, useMediaContext } from "@vidstack/player-react";

const VideoSlider = () => {
  const { bufferedAmount, duration } = useMediaContext();
  const total = duration;
  const buffered = (bufferedAmount / total) * 100;

  return (
    <Container>
      <Wrapper>
        <TimeSlider>
          <SliderTrack>
            <SliderTrackFill></SliderTrackFill>
            <SliderTrackFillBuffer
              bufferedAmount={buffered}
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
