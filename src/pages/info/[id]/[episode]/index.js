import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { WatchContainer } from "../../../../containers";
import { Container } from "../../../../styles/shared";
import { api } from "../../../../utils";

const EpisodePage = () => {
  const router = useRouter();
  const { id, episode, dub } = router.query;

  if (!id) return null;

  // get info data from "/api/anime/info/${episode}" wait for it to load then get watch data from "/api/anime/watch/${episode}/${episode}?dub=${dub}"
  const { data: infoData } = useSWR(
    `/api/anime/info/${id}?dub=${dub || false}`,
    api.fetcher
  );

  const { data: watchData } = useSWR(
    () => (!infoData ? null : `/api/anime/watch/` + infoData?.episodes[0].id),
    api.fetcher
  );

  const data = { ...infoData, ...watchData };

  if (!data) return null;
  return (
    <Container>
      <WatchContainer data={data} />
    </Container>
  );
};

export default EpisodePage;
