import { useMediaPlayer, useMediaStore } from "@vidstack/react";
import React, { useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { SkipButtonContainer } from "./SkipButton.styles";

const SkipButton = (props) => {
  const [opSkipTime, setOpSkipTime] = useState(null);
  const [showSkipButton, setShowSkipButton] = useState(false);
  const { skipTimes } = props;

  const media = useMediaPlayer();
  const { currentTime, duration } = useMediaStore();

  useEffect(() => {
    if (!media) return;

    const findOp = skipTimes.find(
      (time) => time.skipType?.toLowerCase() === "op"
    );

    if (!findOp) return;

    setOpSkipTime(findOp);
  }, [skipTimes]);

  useEffect(() => {
    if (!media) return;
    if (!opSkipTime) return;

    //show the skip button if the current time is greater than the start time of the op skip time and less than the end time of the op skip time
    if (
      currentTime > opSkipTime.interval?.startTime &&
      currentTime < opSkipTime.interval?.endTime
    ) {
      setShowSkipButton(true);
    } else {
      setShowSkipButton(false);
    }
  }, [opSkipTime, currentTime]);

  const handleSkip = () => {
    if (!media) return;
    if (!opSkipTime) return;
    if (currentTime < opSkipTime.interval?.startTime) return;
    media.currentTime = opSkipTime.interval?.endTime;
  };

  useHotkeys("s", () => {
    handleSkip();
  });

  if (!showSkipButton) return null;
  return (
    <SkipButtonContainer onClick={handleSkip} title="hotkey: s">
      Skip Opening
    </SkipButtonContainer>
  );
};

export default SkipButton;
