import { MuteButton, VolumeSlider } from "@vidstack/react";
import React from "react";
import { VolumeWrapper } from "./Volume.styles";

const VideoVolume = () => {
  return (
    <VolumeWrapper>
      <MuteButton />
      <VolumeSlider />
    </VolumeWrapper>
  );
};

export default VideoVolume;
