import { useMediaElement, useMediaState } from "@vidstack/react";
import React, { useCallback, useEffect, useState } from "react";
import VideoControls from "./controls";

const MediaPlayerUI = (props) => {
  const media = useMediaElement();
  const { currentTime } = useMediaState();
  const [hideControls, setHideControls] = useState(false);

  // let duration = 5000;
  // let timeout;
  // const handleInactive = () => {
  //   setHideControls((prev) => !prev);

  //   clearTimeout(timeout);

  //   timeout = setTimeout(() => {
  //     setHideControls(true);
  //   }, duration);
  // };

  // useEffect(() => {
  //   window.addEventListener("mousemove", handleInactive);
  //   return () => {
  //     window.removeEventListener("mousemove", handleInactive);
  //   };
  // }, [handleInactive]);

  return (
    <>
      <VideoControls {...props} />
    </>
  );
};

export default MediaPlayerUI;
