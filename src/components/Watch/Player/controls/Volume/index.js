import { MuteButton, VolumeSlider } from "@vidstack/player-react";
import React from "react";
import {
  Container,
  MediaMute,
  MediaUnmute,
  SliderContainer,
  SliderThumb,
  SliderThumbContainer,
  SliderTrack,
  SliderTrackFill,
  Wrapper,
} from "./Volume.styles";

const VideoVolume = () => {
  return (
    <Container>
      <Wrapper>
        <MuteButton>
          <MediaMute />
          <MediaUnmute />
        </MuteButton>
        <VolumeSlider>
          <SliderContainer>
            <SliderTrack></SliderTrack>
            <SliderTrackFill></SliderTrackFill>
            <SliderThumbContainer>
              <SliderThumb></SliderThumb>
            </SliderThumbContainer>
          </SliderContainer>
        </VolumeSlider>
      </Wrapper>
    </Container>
  );
};

export default VideoVolume;
