import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Episodes, Player, RightInfo } from "../../components";
import {
  Container,
  EpisodesContainer,
  TopContainer,
  VideoContainer,
} from "./Watch.styles";

const WatchContainer = ({ data, tree }) => {
  const router = useRouter();
  const { id, episode, dub = false } = router.query;
  const { sources, episodes, title } = data;
  if (!data) return null;

  //find highest quality
  let highestQuality = sources?.find(
    (source) =>
      source.quality.includes("1080") ||
      source.quality.includes("720") ||
      source.quality.includes("default")
  );
  if (!highestQuality) {
    if (sources?.length) highestQuality = sources[0];
    highestQuality = "";
  }

  const findEpisode = episodes?.find(
    (ep) => Number(ep.number) === Number(episode)
  );

  const proxy = `https://cors.proxy.consumet.org`;
  return (
    <Container>
      <TopContainer>
        <VideoContainer>
          <Player
            subtitles={tree}
            dub={dub}
            url={highestQuality?.url}
            proxy={proxy}
            poster={data?.cover}
            title={title?.english || title?.romaji || title?.native}
            subTitle={
              findEpisode && findEpisode?.title
                ? `${episode} - ${findEpisode?.title}`
                : `${episode} - Episode ${episode}`
            }
          />
        </VideoContainer>
        <RightInfo {...data} />
      </TopContainer>
      <EpisodesContainer>
        <Episodes {...data} />
      </EpisodesContainer>
    </Container>
  );
};

export default WatchContainer;
