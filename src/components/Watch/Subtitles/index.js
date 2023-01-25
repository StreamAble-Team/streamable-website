import { useMediaElement, useMediaState } from "@vidstack/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import VideoSubtitle from "./Subtitle";
import { SubtitlesWrapper } from "./Subtitles.styles";

const VideoSubtitles = ({ subtitles }) => {
  const router = useRouter();
  const [cues, setCues] = useState([]);
  const [subtitleHtml, setSubtitleHtml] = useState("");
  const media = useMediaElement();

  const { dub } = router.query;

  const realDub = eval(dub) === false ? false : true;
  // - This is a live subscription to the paused store.
  // - All stores are lazily subscribed to on prop access.
  const { currentTime } = useMediaState();

  useEffect(() => {
    if (!media) return;
    if (!subtitles || !realDub) return;

    const overlappingCues = subtitles?.cues?.filter(
      (cue) => cue.startTime <= currentTime && cue.endTime >= currentTime
    );

    console.log(currentTime, overlappingCues);

    if (overlappingCues?.length > 0) {
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
  }, [currentTime]);

  return (
    <SubtitlesWrapper>
      <VideoSubtitle subtitleHtml={subtitleHtml} />
    </SubtitlesWrapper>
  );
};

export default VideoSubtitles;
