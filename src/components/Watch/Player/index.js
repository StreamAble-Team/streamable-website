import { Hls, Media } from "@vidstack/player-react";
import React from "react";
import { Container } from "./Player.styles";

const Player = ({ data }) => {
  const { sources, cover } = data;

  if (!sources) return null;
  const proxyURL = `https://cors.proxy.consumet.org`;

  //find highest quality in sources but override if 1080p is available
  const findHighest = sources.reduce((prev, current) => {
    return prev.quality > current.quality ? prev : current;
  });
  return (
    <Container>
      <Media>
        <Hls controls={true}>
          <video
            src={`${proxyURL}/${findHighest.url}`}
            preload="metadata"
            controls
            data-video="0"
          />
        </Hls>
      </Media>
    </Container>
  );
};

export default Player;