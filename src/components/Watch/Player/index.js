import React, { useCallback, useRef, useState } from "react";
import { Container } from "./Player.styles";
import {
  Hls,
  Media,
  AspectRatio,
  useMediaContext,
} from "@vidstack/player-react";
import VideoControls from "./controls";
import CustomGesture from "./controls/CustomGesture";
import VideoPoster from "./Poster";
import VideoSubtitles from "./Subtitles";
import VideoBuffering from "./Buffer";

const Player = ({ url, proxy, poster, title, subTitle, subtitles, dub }) => {
  const media = useRef(null);
  const { currentTime } = useMediaContext(media);
  const [currentCue, setCurrentCue] = useState(0);
  const [subtitleHtml, setSubtitleHtml] = useState("");

  const timeUpdate = useCallback(
    (_e) => {
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

      // if (subtitles.cues[currentCue].startTime <= currentTime) {
      //   if (subtitles.cues[currentCue].endTime < currentTime) {
      //     setCurrentCue(currentCue + 1);
      //     return;
      //   }
      // } else if (subtitles.cues[currentCue].startTime > currentTime) {
      //   setCurrentCue(currentCue - 1 >= 0 ? currentCue - 1 : 0);
      //   return;
      // }
    },
    [currentTime, currentCue, subtitleHtml, subtitles]
  );

  if (!url) return null;
  return (
    <Container>
      <Media ref={media}>
        <VideoPoster />
        <CustomGesture />
        <AspectRatio ratio="16/9">
          <Hls poster={poster}>
            <video
              src={proxy ? `${proxy}/${url}` : url}
              preload="all"
              onTimeUpdate={timeUpdate}
            />
          </Hls>
          <VideoBuffering />
          <VideoSubtitles subtitleHtml={subtitleHtml} subtitles={subtitles} />
          <VideoControls title={title} subTitle={subTitle} />
        </AspectRatio>
      </Media>
    </Container>
  );
};

export default Player;
