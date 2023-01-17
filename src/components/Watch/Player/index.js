import React from "react";
import { Container } from "./Player.styles";
import { Hls, Media, AspectRatio } from "@vidstack/player-react";
import VideoControls from "./controls";
import CustomGesture from "./controls/CustomGesture";
import VideoPoster from "./Poster";

const Player = ({ url, proxy, poster, title, subTitle }) => {
  if (!url) return null;
  return (
    <Container>
      <Media>
        <VideoPoster />
        <CustomGesture />
        <AspectRatio ratio="16/9">
          <Hls poster={poster}>
            <video src={proxy ? `${proxy}/${url}` : url} preload="all" />
          </Hls>
          <VideoControls title={title} subTitle={subTitle} />
        </AspectRatio>
      </Media>
    </Container>
  );
};

export default Player;
