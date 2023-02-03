import {
  MediaMuteButton,
  MediaVolumeSlider,
  VolumeSlider,
} from "@vidstack/react";
import React from "react";
import { VolumeWrapper } from "./Volume.styles";

const VideoVolume = () => {
  return (
    <VolumeWrapper>
      <MediaMuteButton />
      <MediaVolumeSlider />
    </VolumeWrapper>
  );
};

export default VideoVolume;
