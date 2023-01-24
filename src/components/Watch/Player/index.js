import React, { useCallback, useRef, useState } from "react";
import { Container, VideoContainer } from "./Player.styles";
import VideoControls from "./controls";
import CustomGesture from "./controls/CustomGesture";
import VideoPoster from "./Poster";
import VideoSubtitles from "./Subtitles";
import VideoBuffering from "./Buffer";
import { AspectRatio, HLSVideo, Media, MediaProvider } from "@vidstack/react";
import MediaPlayerUi from "./MediaPlayerUi";

const Player = ({ url, proxy, poster, title, subTitle, subtitles, dub }) => {
  const media = useRef(null);
  if (!url) return null;

  return (
    <Container>
      <MediaProvider>
        <Media ref={media}>
          <AspectRatio ratio={16 / 9}>
            <VideoPoster />
            <CustomGesture />
            <VideoContainer>
              <HLSVideo poster={poster}>
                <video src={proxy ? `${proxy}/${url}` : url} preload="all" />
              </HLSVideo>
              <MediaPlayerUi
                subtitles={subtitles}
                dub={dub}
                mediaRef={media}
                url={url}
                title={title}
                subTitle={subTitle}
              />
            </VideoContainer>
          </AspectRatio>
        </Media>
      </MediaProvider>
    </Container>
  );
};

export default Player;
