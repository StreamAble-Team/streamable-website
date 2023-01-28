import {
  useMediaElement,
  useMediaRemote,
  useMediaState,
} from "@vidstack/react";
import React, { useCallback, useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import VideoControls from "./controls";

const MediaPlayerUI = (props) => {
  const media = useMediaElement();
  const { currentTime } = useMediaState();

  const remote = useMediaRemote();

  useHotkeys("f", () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else remote.enterFullscreen();
  });

  useHotkeys("space", () => {
    remote.togglePaused();
  });

  useHotkeys("m", () => {
    remote.toggleMuted();
  });

  return (
    <>
      <VideoControls {...props} />
    </>
  );
};

export default MediaPlayerUI;
