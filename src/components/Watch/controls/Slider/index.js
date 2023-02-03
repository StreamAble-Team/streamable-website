import {
  MediaTimeSlider,
  useMediaPlayer,
  useMediaStore,
} from "@vidstack/react";
import React, { useEffect, useState } from "react";
import { SliderWrapper, VideoTime } from "./Slider.styles";

const VideoSlider = () => {
  const [time, setTime] = useState("00:00");
  const [remaining, setRemaining] = useState("00:00");
  const [videoDuration, setVideoDuration] = useState("00:00");

  const media = useMediaPlayer();
  const { currentTime, duration } = useMediaStore();

  useEffect(() => {
    if (!media) return;

    const minutes = Math.floor(currentTime / 60);
    const seconds = (currentTime % 60).toFixed(0).padStart(2, "0");
    setTime(`${minutes}:${seconds}`);

    const rem = duration - currentTime;

    const dur_minutes = Math.floor(rem / 60);
    const dur_seconds = (rem % 60).toFixed(0).padStart(2, "0");
    setRemaining(`${dur_minutes}:${dur_seconds}`);
  }, [currentTime]);

  return (
    <SliderWrapper>
      <VideoTime>{time}</VideoTime>
      <MediaTimeSlider />
      <VideoTime>{remaining}</VideoTime>
    </SliderWrapper>
  );
};

export default VideoSlider;
