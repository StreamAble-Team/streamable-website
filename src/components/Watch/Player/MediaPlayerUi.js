import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, VideoContainer } from "./Player.styles";
import VideoControls from "./controls";
import CustomGesture from "./controls/CustomGesture";
import VideoPoster from "./Poster";
import VideoSubtitles from "./Subtitles";
import VideoBuffering from "./Buffer";
import {
  HLSVideo,
  Media,
  MediaProvider,
  useMediaElement,
  useMediaProviderElement,
  useMediaState,
} from "@vidstack/react";

const MediaPlayerUi = ({ url, title, subTitle, subtitles, dub, mediaRef }) => {
  const mediaElem = useMediaElement(mediaRef);
  const currentTime = mediaElem?.currentTime;
  const [currentCue, setCurrentCue] = useState(0);
  const [subtitleHtml, setSubtitleHtml] = useState("");

  const timeUpdate = (_e) => {
    if (!subtitles || eval(dub) === true) return;

    const overlappingCues = subtitles?.cues.filter(
      (cue) => cue.startTime <= currentTime && cue.endTime >= currentTime
    );

    if (overlappingCues.length > 0) {
      if (subtitleHtml != null) {
        let subText = "";
        overlappingCues.forEach((cue) => {
          subText += cue.text + "\n";
        });
        setSubtitleHtml(subText.trimEnd());
      }
    } else {
      if (subtitleHtml != null) {
        setSubtitleHtml("");
      }
    }
  };

  useEffect(() => {
    timeUpdate();
  }, [mediaElem, currentTime]);

  if (!url) return null;
  return (
    <>
      <VideoBuffering />
      <VideoSubtitles subtitleHtml={subtitleHtml} subtitles={subtitles} />
      <VideoControls title={title} subTitle={subTitle} />
    </>
  );
};

export default MediaPlayerUi;
