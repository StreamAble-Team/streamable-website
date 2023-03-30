import { useMediaPlayer, useMediaRemote, useMediaStore } from "@vidstack/react";
import React, { useCallback, useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import VideoControls from "./controls";
import { utils } from "../../utils";

const MediaPlayerUI = (props) => {
  const [firstLoad, setFirstLoad] = useState(true);
  const media = useMediaPlayer();
  const { currentTime, duration } = useMediaStore();

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

  const continueWatching = async () => {
    const watchedPercent = (currentTime / duration) * 100;

    const { data, currentEpisode } = props;

    const setWatched = await utils.continueWatching(
      data,
      watchedPercent,
      Number(currentEpisode)
    );

    return setWatched;
  };

  const checkContinueWatching = async () => {
    const { data, currentEpisode } = props;

    const continueWatching = await utils.getContinueWatching(
      data,
      Number(currentEpisode)
    );

    if (!continueWatching) return;

    const { watchedPercent } = continueWatching;

    console.log("continueWatching", continueWatching);

    const seekTo = (watchedPercent / 100) * duration;

    await remote.seek(seekTo);
    setFirstLoad(false);
  };

  useEffect(() => {
    if (!media || !duration) return;
    checkContinueWatching();
  }, [media, duration]);

  useEffect(() => {
    if (firstLoad) return;
    continueWatching();
  }, [currentTime]);

  return (
    <>
      <VideoControls {...props} />
    </>
  );
};

export default MediaPlayerUI;
