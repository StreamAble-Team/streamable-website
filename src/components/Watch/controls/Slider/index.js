import {
  MediaTimeSlider,
  useMediaPlayer,
  useMediaStore,
} from "@vidstack/react";
import React, { useEffect, useState } from "react";
import { SliderWrapper, VideoTime, OpSkipTime } from "./Slider.styles";

const VideoSlider = (props) => {
  const [opSkipTime, setOpSkipTime] = useState(null);
  const [time, setTime] = useState("00:00");
  const [remaining, setRemaining] = useState("00:00");
  const [videoDuration, setVideoDuration] = useState("00:00");

  const { skipTimes } = props;

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

  useEffect(() => {
    if (!media) return;
  }, [currentTime]);

  useEffect(() => {
    if (!media) return;

    const findOp = skipTimes.find(
      (time) => time.skipType?.toLowerCase() === "op"
    );

    if (!findOp) return;

    setOpSkipTime(findOp);
  }, [skipTimes]);

  return (
    <SliderWrapper>
      <VideoTime>{time}</VideoTime>
      <MediaTimeSlider>
        {!opSkipTime ? null : (
          <OpSkipTime
            fromLeft={(opSkipTime.interval?.startTime / duration) * 100}
            // get the width of the op skip time from the start time to the end time
            width={
              ((opSkipTime.interval?.endTime - opSkipTime.interval?.startTime) /
                duration) *
              100
            }
          />
        )}
      </MediaTimeSlider>
      <VideoTime>{remaining}</VideoTime>
    </SliderWrapper>
  );
};

export default VideoSlider;
