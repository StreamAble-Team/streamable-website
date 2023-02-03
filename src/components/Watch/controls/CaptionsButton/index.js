import { MediaToggleButton } from "@vidstack/react";
import React from "react";
import {
  MediaCaptionsOffIcon,
  MediaCaptionsOnIcon,
} from "./CaptionsButton.styles";

const VideoCaptionsButton = ({ showSubtitles, setShowSubtitles }) => {
  const handleToggle = () => {
    setShowSubtitles((prev) => !prev);
  };

  return (
    <MediaToggleButton defaultPressed={!showSubtitles} onClick={handleToggle}>
      <MediaCaptionsOffIcon slot={"on"} />
      <MediaCaptionsOnIcon slot={"off"} />
    </MediaToggleButton>
  );
};

export default VideoCaptionsButton;
