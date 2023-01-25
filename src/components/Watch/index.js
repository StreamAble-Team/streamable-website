import { AspectRatio, HLSVideo, Media, MediaProvider } from "@vidstack/react";
import React from "react";
import VideoBuffering from "./Buffering";
import MediaPlayerUI from "./MediaPlayerUi";
import VideoSubtitles from "./Subtitles";

const VideoPlayer = ({ poster, proxy, src, title, subTitle, subtitles }) => {
  return (
    <>
      <MediaProvider>
        <Media poster={poster || ""} view="video" userIdleDelay={4000}>
          <AspectRatio ratio={"16/9"}>
            <HLSVideo>
              <video src={proxy ? `${proxy}/${src}` : src} preload="none" />
            </HLSVideo>
            <VideoBuffering />
            <VideoSubtitles subtitles={subtitles} />
            <MediaPlayerUI title={title || "??"} subTitle={subTitle || "??"} />
          </AspectRatio>
        </Media>
      </MediaProvider>
    </>
  );
};

export default VideoPlayer;
