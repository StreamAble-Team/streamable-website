import { useRouter } from "next/router";
import React from "react";
import { utils } from "../../../utils";
import {
  Container,
  Description,
  Episode,
  EpisodeNumber,
  Genre,
  Genres,
  Title,
  Wrapper,
} from "./RightInfo.styles";

const RightInfo = (props) => {
  const router = useRouter();
  const { episode } = router.query;
  let { title, episodes, genres, description, cover } = props;
  title = title?.english || title?.romaji || title?.native;

  const parsed = utils.textSanitizer(description || "??");
  const findEpisode = episodes?.find(
    (ep) => Number(ep.number) === Number(episode)
  );

  if (!props) return null;
  return (
    <Container src={cover}>
      <Wrapper>
        <Title>{title || "??"}</Title>
        <Episode>
          {findEpisode?.number || 0} - {findEpisode?.title || "??"}
        </Episode>
        <Genres>
          {genres?.map((genre) => (
            <Genre key={genre}>{genre}</Genre>
          ))}
        </Genres>
        <Description>{parsed}</Description>
      </Wrapper>
    </Container>
  );
};

export default RightInfo;
