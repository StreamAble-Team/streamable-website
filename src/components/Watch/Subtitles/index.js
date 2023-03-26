import { useMediaPlayer, useMediaStore } from "@vidstack/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import VideoSubtitle from "./Subtitle";
import { SubtitlesWrapper } from "./Subtitles.styles";

const VideoSubtitles = ({ subtitles, showSubtitles, setShowSubtitles }) => {
  const router = useRouter();
  const [subtitleHtml, setSubtitleHtml] = useState("");
  const media = useMediaPlayer();

  const { dub } = router.query;

  const realDub = dub === "false" || dub === false ? false : true;
  // - This is a live subscription to the paused store.
  // - All stores are lazily subscribed to on prop access.
  const { currentTime } = useMediaStore();

  useEffect(() => {
    if (!media) return;
    if (!showSubtitles) return;

    if (!subtitles) setShowSubtitles(false);

    const overlappingCues = subtitles?.cues?.filter(
      (cue) => cue.startTime <= currentTime && cue.endTime >= currentTime
    );

    if (overlappingCues?.length > 0) {
      if (subtitleHtml != null) {
        let subText = "";
        overlappingCues.forEach((cue) => (subText += cue.text + "\n"));
        setSubtitleHtml(subText.trimEnd());
      }
    } else {
      if (subtitleHtml != null) {
        setSubtitleHtml("");
      }
    }
  }, [currentTime]);

  if (!showSubtitles) return null;
  return (
    <SubtitlesWrapper>
      <VideoSubtitle subtitleHtml={subtitleHtml} />
    </SubtitlesWrapper>
  );
};

export default VideoSubtitles;
